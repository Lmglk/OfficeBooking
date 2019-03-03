package com.vvt.officebooking.model.dto.room;

import com.vvt.officebooking.model.entity.place.PlaceEntity;
import lombok.Data;

import java.util.Set;

@Data
public class RoomDto {
    protected Long id;

    private String name;

    private String description;

    private Integer width;

    private Integer height;

    private Set<PlaceEntity> places;
}
