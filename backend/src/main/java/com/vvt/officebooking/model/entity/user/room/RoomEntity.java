package com.vvt.officebooking.model.entity.user.room;

import com.vvt.officebooking.model.entity.user.place.PlaceEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "rooms")
public class RoomEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Long id;

    @Column
    @NotBlank
    private String name;

    @Column
    private String description;

    @Column
    @NotNull
    private Integer width;

    @Column
    @NotNull
    private Integer height;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Set<PlaceEntity> places;
}
