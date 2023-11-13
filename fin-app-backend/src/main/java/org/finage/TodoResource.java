package org.finage;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.Response.Status;

import java.util.List;

@Path("/todos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TodoResource {
    @GET
    @Transactional
    public List<Todo> getAllTodos() {
        return Todo.listAll();
    }

    @POST
    @Transactional
    public Response addTodo(Todo todo) {
        todo.persist();
        return Response.status(Status.CREATED).entity(todo).build();
    }
}
