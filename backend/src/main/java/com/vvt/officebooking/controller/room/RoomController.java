package com.vvt.officebooking.controller.room;

import com.vvt.officebooking.controller.messages.RequestMessage;
import com.vvt.officebooking.model.entity.user.room.RoomEntity;
import com.vvt.officebooking.service.user.room.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/room", produces = MediaType.APPLICATION_JSON_VALUE)
public class RoomController {
    private RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping(value = "/get")
    public ResponseEntity get(@RequestBody @Valid RequestMessage idRequest) {
        RoomEntity room = roomService.get(idRequest.getId());
        return getRoom(room);
    }

    @PostMapping(value = "/save")
    @Transactional
    public ResponseEntity save(@RequestBody @Valid RoomEntity room) {
        RoomEntity newRoom = roomService.save(room);
        return getRoom(newRoom);
    }

    @PostMapping(value = "/remove")
    @Transactional
    public void remove(@RequestBody @Valid RoomEntity room) {
        roomService.remove(room);
    }

    private ResponseEntity getRoom(RoomEntity newRoom) {
        if (newRoom.getId() != null) {
            return new ResponseEntity<>(newRoom, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
