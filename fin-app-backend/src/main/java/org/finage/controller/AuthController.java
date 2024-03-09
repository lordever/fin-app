package org.finage.controller;

import io.smallrye.mutiny.Uni;
import io.vertx.mutiny.ext.web.client.WebClient;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import static io.vertx.mutiny.core.MultiMap.caseInsensitiveMultiMap;

@Path("/auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuthController {

    @Inject
    WebClient webClient;

    private static final String KEYCLOAK_URL = "http://localhost:8080/auth/realms/fin-app/protocol/openid-connect/token";
    private static final String CLIENT_ID = "portal";
    private static final String CLIENT_SECRET = "YourClientSecret";
    private static final String GRANT_TYPE = "client_credentials";

    @GET
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<String> login() {
        return webClient.postAbs(KEYCLOAK_URL)
                .putHeader("Content-Type", "application/x-www-form-urlencoded")
                .sendForm(caseInsensitiveMultiMap()
                        .add("grant_type", GRANT_TYPE)
                        .add("client_id", CLIENT_ID)
                        .add("client_secret", CLIENT_SECRET))
                .onItem().transform(response -> {
                    if (response.statusCode() == 200) {
                        return response.bodyAsJsonObject().encode();
                    } else {
                        return "{\"error\":\"Failed to obtain token\"}";
                    }
                });
    }

}
