package org.finage.controller.dto;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreditDTO {
    private UUID id;
    private String name;
    private Double costPerMonth;
    private Double fullCost;
}
