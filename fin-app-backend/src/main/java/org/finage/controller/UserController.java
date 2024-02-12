package org.finage.controller;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.finage.controller.dto.CreditDTO;
import org.finage.controller.dto.FinUserDTO;
import org.finage.controller.dto.GoalDTO;
import org.finage.model.FinUser;
import org.finage.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Path("/users")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UserController {

    @Inject
    UserRepository userRepository;

    @GET
    @Transactional
    public List<FinUserDTO> getAll() {
        List<FinUser> users = userRepository.findAll().list();
        List<FinUserDTO> finUserDTOList = new ArrayList<>();

        users.forEach(user -> {
            FinUserDTO finUserDTO = FinUserDTO.builder()
                    .id(user.getId())
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .freeIncome(user.getFreeIncome())
                    .build();

            List<GoalDTO> goalList = collectGoals(user);
            List<CreditDTO> creditList = collectCredits(user);
            finUserDTO.setGoals(goalList);
            finUserDTO.setCredits(creditList);

            finUserDTOList.add(finUserDTO);
        });

        return finUserDTOList;
    }

    private List<GoalDTO> collectGoals(FinUser user) {
        return user.getGoals().stream()
                .map(goal -> GoalDTO
                        .builder()
                        .id(goal.getId())
                        .name(goal.getName())
                        .cost(goal.getCost())
                        .priority(goal.getPriority())
                        .build()
                )
                .collect(Collectors.toList());
    }

    private List<CreditDTO> collectCredits(FinUser user) {
        return user.getCredits().stream()
                .map(credit -> CreditDTO
                        .builder()
                        .id(credit.getId())
                        .name(credit.getName())
                        .costPerMonth(credit.getCostPerMonth())
                        .fullCost(credit.getFullCost())
                        .build()
                )
                .collect(Collectors.toList());
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
