package org.finage.controller.dto;

import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FinUserDTO {
    private UUID id;
    private String firstName;
    private String lastName;
    private Double freeIncome;
    private List<GoalDTO> goals;
    private List<CreditDTO> credits;
}
