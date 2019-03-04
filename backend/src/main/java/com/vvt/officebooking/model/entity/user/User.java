package com.vvt.officebooking.model.entity.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.vvt.officebooking.model.entity.booking.BookingEntity;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
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
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false, unique = true)
    private String email;
    @Column
    private UserRole role;

    public String getDisplayName() {
        return name;
    }


    @OneToOne(mappedBy = "user")
    @JsonIgnore
    private BookingEntity booking;
}
