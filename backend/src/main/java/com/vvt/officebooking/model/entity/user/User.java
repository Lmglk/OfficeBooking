package com.vvt.officebooking.model.entity.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Collections;
import java.util.Set;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users", indexes = {@Index(name = "idx_email", columnList = "email")})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false, unique = true)
    private String email;
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<UserRole> roles;

    public String getDisplayName() {
        return name;
    }

    public void addRole(UserRole userRole) {
        roles.add(userRole);
    }

    public void removeRole(UserRole userRole) {
        roles.remove(userRole);
    }

    public Set<UserRole> getRoles() {
        if (roles == null) {
            return Collections.emptySet();
        }
        return roles;
    }
}
