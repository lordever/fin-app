package org.finage.controller;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.finage.model.FinUser;
import org.finage.repository.UserRepository;

import java.util.List;

@Path("/users")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UserController {

    @Inject
    UserRepository userRepository;

    @GET
    @Transactional
    public List<FinUser> getAll() {
        return userRepository.listAll();
    }

    @POST
    @Transactional
    public Response addUser(FinUser finUser) {
        userRepository.persist(finUser);
        return Response
                .status(Response.Status.CREATED)
                .entity(finUser)
                .build();
    }
}
