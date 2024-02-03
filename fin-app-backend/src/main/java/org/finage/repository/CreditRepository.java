package org.finage.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.finage.model.Credit;

@ApplicationScoped
public class CreditRepository implements PanacheRepository<Credit> {
}
