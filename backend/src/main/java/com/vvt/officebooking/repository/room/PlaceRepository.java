package com.vvt.officebooking.repository.room;

import com.vvt.officebooking.model.entity.user.place.PlaceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<PlaceEntity, Long> {
}