package com.vvt.officebooking.repository.booking;

import com.vvt.officebooking.model.entity.booking.BookingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<BookingEntity, Long> {
}
