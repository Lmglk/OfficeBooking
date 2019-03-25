package com.vvt.officebooking.service.booking;

import com.vvt.officebooking.model.entity.booking.BookingEntity;
import com.vvt.officebooking.model.entity.place.PlaceEntity;
import com.vvt.officebooking.repository.booking.BookingRepository;
import com.vvt.officebooking.service.place.PlaceService;
import com.vvt.officebooking.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class BookingService {
    private BookingRepository bookingRepository;
    private UserService userService;
    private PlaceService placeService;

    @Autowired
    public BookingService(BookingRepository bookingRepository,
                          UserService userService,
                          PlaceService placeService) {
        this.bookingRepository = bookingRepository;
        this.userService = userService;
        this.placeService = placeService;
    }


    public BookingEntity get(Long id) throws EntityNotFoundException {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("id not found"));
    }

    public BookingEntity save(BookingEntity booking, Long idPlace) {
        booking.setPlace(getPlace(idPlace));
        booking.setUser(userService.getCurrentUser());
        return bookingRepository.saveAndFlush(booking);
    }

    public void remove(BookingEntity place) {
        bookingRepository.delete(place);
    }

    public List<BookingEntity> list() {
        return bookingRepository.findAll();
    }

    private PlaceEntity getPlace(Long idPlace) {
        return placeService.get(idPlace);
    }
}
