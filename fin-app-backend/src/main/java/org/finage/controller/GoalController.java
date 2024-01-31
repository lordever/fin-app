package org.finage.controller;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.finage.model.FinUser;
import org.finage.model.Goal;
import org.finage.repository.GoalRepository;

import java.util.List;

@Path("/goals")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class GoalController {
    @Inject
    GoalRepository goalRepository;

    @GET
    @Transactional
    public List<Goal> getAllGoals() {
        return goalRepository.listAll();
    }

    @POST
    @Transactional
    public Response addGoal(Goal goal) {
        if (goal.getUserId() != null) {
            FinUser user = FinUser.findById(goal.getUserId());
            if (user == null) {
                throw new WebApplicationException("User not found", Response.Status.NOT_FOUND);
            }
            goal.setUser(user);
        }
        goal.persist();
        return Response
                .status(Response.Status.CREATED)
                .entity(goal)
                .build();
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
