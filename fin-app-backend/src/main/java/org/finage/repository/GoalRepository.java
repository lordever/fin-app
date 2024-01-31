package org.finage.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.finage.model.Goal;

@ApplicationScoped
public class GoalRepository implements PanacheRepository<Goal> {
}
