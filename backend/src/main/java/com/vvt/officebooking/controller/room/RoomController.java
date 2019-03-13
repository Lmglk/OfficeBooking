package com.vvt.officebooking.controller.room;

import com.vvt.officebooking.controller.messages.RequestMessage;
import com.vvt.officebooking.model.entity.room.RoomEntity;
import com.vvt.officebooking.service.room.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

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

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping(value = "/save")
    @Transactional
    public ResponseEntity save(@RequestBody @Valid RoomEntity room) {
        RoomEntity newRoom = roomService.save(room);
        return getRoom(newRoom);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping(value = "/remove")
    @Transactional
    public void remove(@RequestBody @Valid RoomEntity room) {
        roomService.remove(room);
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<RoomEntity>> list() {
        List<RoomEntity> items = roomService.list();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    private ResponseEntity getRoom(RoomEntity newRoom) {
        if (newRoom.getId() != null) {
            return new ResponseEntity<>(newRoom, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
