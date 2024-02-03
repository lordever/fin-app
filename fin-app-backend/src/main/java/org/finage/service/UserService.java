package org.finage.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;
import org.finage.model.FinUser;

@ApplicationScoped
public class UserService {
    public FinUser validateAndGetUser(Long userId) {
        FinUser user = FinUser.findById(userId);
        if (user == null) {
            throw new WebApplicationException("User not found", Response.Status.NOT_FOUND);
        }
        return user;
    }
}
