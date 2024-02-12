package org.finage.controller;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.finage.model.FinUser;
import org.finage.model.Goal;
import org.finage.repository.GoalRepository;
import org.finage.service.UserService;

import java.util.List;
import java.util.UUID;

@Path("/goals")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class GoalController {
    @Inject
    GoalRepository goalRepository;

    @Inject
    UserService userService;

    @GET
    @Transactional
    public List<Goal> getAllGoals() {
        return goalRepository.listAll();
    }

    @POST
    @Transactional
    public Response addGoal(@QueryParam("userId") UUID userId, Goal goal) {
        FinUser user = userService.validateAndGetUser(userId);
        if (user == null) {
            return Response
                    .status(Response.Status.NOT_FOUND)
                    .entity(new Error("Not found"))
                    .build();
        }

        user.addGoal(goal);
        goalRepository.persist(goal);
        return Response.status(Response.Status.CREATED).entity(goal).build();
    }

    @GET
    @Path("/user/{userId}")
    public List<Goal> getGoalsByUser(@PathParam("userId") Long userId) {
        FinUser user = FinUser.findById(userId);
        if (user != null) {
            return user.getGoals();
        } else {
            throw new WebApplicationException("User not found", 404);
        }
    }
}
