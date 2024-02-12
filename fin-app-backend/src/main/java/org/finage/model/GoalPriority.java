package org.finage.model;

public enum GoalPriority {
    HIGH(0),
    MEDIUM(1),
    LOW(2);

    private final int priority;

    GoalPriority(int priority) {
        this.priority = priority;
    }

    public int getPriority() {
        return priority;
    }
}
