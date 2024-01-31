package org.finage.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.finage.model.FinUser;

@ApplicationScoped
public class UserRepository implements PanacheRepository<FinUser> {
}
