package com.vvt.officebooking.repository.user.room;

import com.vvt.officebooking.model.entity.user.room.RoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<RoomEntity, Long> {
}
