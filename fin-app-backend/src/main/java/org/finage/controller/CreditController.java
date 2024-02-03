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
    public Response addCredit(Credit credit) {
        if (credit.getUserId() != null) {
            FinUser user = userService.validateAndGetUser(credit.getUserId());
            credit.setUser(user);
        }
        credit.persist();
        return Response
                .status(Response.Status.CREATED)
                .entity(credit)
                .build();
    }
}
