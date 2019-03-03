package com.vvt.officebooking.service.booking;

import com.vvt.officebooking.model.entity.booking.BookingEntity;
import com.vvt.officebooking.repository.booking.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class BookingService {
    private BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }


    public BookingEntity get(Long id) throws EntityNotFoundException {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("id not found"));
    }

    public BookingEntity save(BookingEntity place) {
        return bookingRepository.saveAndFlush(place);
    }

    public void remove(BookingEntity place) {
        bookingRepository.delete(place);
    }
}
