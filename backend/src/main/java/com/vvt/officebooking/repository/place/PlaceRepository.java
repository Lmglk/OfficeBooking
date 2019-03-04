package com.vvt.officebooking.repository.place;

import com.vvt.officebooking.model.entity.place.PlaceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<PlaceEntity, Long> {
}
