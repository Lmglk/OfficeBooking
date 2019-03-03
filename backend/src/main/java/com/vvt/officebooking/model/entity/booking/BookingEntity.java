package com.vvt.officebooking.model.entity.booking;

import com.vvt.officebooking.model.entity.place.PlaceEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "booking")
public class BookingEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Date fromDate;

    @Column
    private Date toDate;

    @Column
    private Boolean approved;

    @Column
    private Boolean isExpired;

    @OneToOne(fetch = FetchType.EAGER)
    @NotNull
    private PlaceEntity place;
}
