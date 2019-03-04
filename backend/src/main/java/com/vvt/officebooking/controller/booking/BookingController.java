package com.vvt.officebooking.controller.booking;

import com.vvt.officebooking.controller.messages.RequestMessage;
import com.vvt.officebooking.model.entity.booking.BookingEntity;
import com.vvt.officebooking.service.booking.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/api/booking", produces = MediaType.APPLICATION_JSON_VALUE)
public class BookingController {
    private BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping(value = "/get")
    public ResponseEntity get(@RequestBody @Valid RequestMessage idRequest) {
        BookingEntity item = bookingService.get(idRequest.getId());
        return getItem(item);
    }

    @PostMapping(value = "/save")
    @Transactional
    public ResponseEntity save(@RequestBody @Valid BookingEntity item) {
        BookingEntity newItem = bookingService.save(item);
        return getItem(newItem);
    }

    @PostMapping(value = "/remove")
    @Transactional
    public void remove(@RequestBody @Valid BookingEntity item) {
        bookingService.remove(item);
    }

    private ResponseEntity getItem(BookingEntity newItem) {
        if (newItem.getId() != null) {
            return new ResponseEntity<>(newItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<BookingEntity>> list() {
        List<BookingEntity> items = bookingService.list();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
}
