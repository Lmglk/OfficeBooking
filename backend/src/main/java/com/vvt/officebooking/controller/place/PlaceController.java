package com.vvt.officebooking.controller.place;

import com.vvt.officebooking.controller.messages.RequestMessage;
import com.vvt.officebooking.model.entity.place.PlaceEntity;
import com.vvt.officebooking.service.place.PlaceService;
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
@RequestMapping(value = "/api/place", produces = MediaType.APPLICATION_JSON_VALUE)
public class PlaceController {
    private PlaceService placeService;

    @Autowired
    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @PostMapping(value = "/get")
    public ResponseEntity get(@RequestBody @Valid RequestMessage idRequest) {
        PlaceEntity item = placeService.get(idRequest.getId());
        return getItem(item);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping(value = "/save")
    @Transactional
    public ResponseEntity save(@RequestBody @Valid PlaceEntity item, @RequestParam @Valid Long idRoom) {
        PlaceEntity newItem = placeService.save(item, idRoom);
        return getItem(newItem);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping(value = "/remove")
    @Transactional
    public void remove(@RequestBody @Valid PlaceEntity item) {
        placeService.remove(item);
    }

    private ResponseEntity getItem(PlaceEntity newItem) {
        if (newItem.getId() != null) {
            return new ResponseEntity<>(newItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<PlaceEntity>> list() {
        List<PlaceEntity> items = placeService.list();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
}
