package org.finage.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.*;

@Entity
public class Credit extends PanacheEntity {
    @Column(nullable = false)
    private String name;

    @Column(nullable = false, name = "cost_per_month")
    private Double costPerMonth;

    @Column(nullable = false, name = "full_cost")
    private Double fullCost;

    @Transient
    private Long userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonbTransient
    private FinUser user;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getCostPerMonth() {
        return costPerMonth;
    }

    public void setCostPerMonth(Double costPerMonth) {
        this.costPerMonth = costPerMonth;
    }

    public Double getFullCost() {
        return fullCost;
    }

    public void setFullCost(Double fullCost) {
        this.fullCost = fullCost;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public FinUser getUser() {
        return user;
    }

    public void setUser(FinUser user) {
        this.user = user;
    }
}
