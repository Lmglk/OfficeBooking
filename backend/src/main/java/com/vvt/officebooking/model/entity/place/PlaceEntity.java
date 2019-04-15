package com.vvt.officebooking.model.entity.place;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vvt.officebooking.model.entity.booking.BookingEntity;
import com.vvt.officebooking.model.entity.room.RoomEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "places")
public class PlaceEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Long id;

    @Column
    @NotBlank
    private String name;

    @Column
    private String description;

    @Column
    private HashSet<Equipment> equipments = new HashSet<>();

    @Column
    @NotNull
    private Boolean isUsed = false;

    @Column
    @NotNull
    private Boolean isAvailableForBooking = true;

    @Column
    @NotNull
    private Integer x;

    @Column
    @NotNull
    private Integer y;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    private RoomEntity room;

    @OneToMany(mappedBy = "place")
    @JsonIgnore
    private List<BookingEntity> booking = new ArrayList<>();
}
