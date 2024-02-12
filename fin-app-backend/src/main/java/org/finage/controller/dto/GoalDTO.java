package org.finage.controller.dto;

import lombok.*;
import org.finage.model.GoalPriority;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GoalDTO {
    private UUID id;
    private int cost;
    private GoalPriority priority;
    private String name;
}
