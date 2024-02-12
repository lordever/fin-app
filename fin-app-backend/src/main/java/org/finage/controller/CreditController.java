package org.finage.controller;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.finage.model.Credit;
import org.finage.model.FinUser;
import org.finage.repository.CreditRepository;
import org.finage.service.UserService;

import java.util.List;
import java.util.UUID;

@Path("/credits")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CreditController {
    @Inject
    CreditRepository creditRepository;

    @Inject
    UserService userService;

    @GET
    @Transactional
    public List<Credit> getAllGoals() {
        return creditRepository.listAll();
    }

    @POST
    @Transactional
    public Response addCredit(@QueryParam("userId") UUID userId, Credit credit) {
        FinUser user = userService.validateAndGetUser(userId);
        if (user == null) {
            return Response
                    .status(Response.Status.NOT_FOUND)
                    .entity(new Error("Not found"))
                    .build();
        }

        user.addCredit(credit);
        creditRepository.persist(credit);
        return Response.status(Response.Status.CREATED).entity(credit).build();
    }
}
