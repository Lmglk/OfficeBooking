package com.vvt.officebooking.controller.place;

import com.vvt.officebooking.controller.messages.RequestMessage;
import com.vvt.officebooking.model.entity.place.PlaceEntity;
import com.vvt.officebooking.service.place.PlaceService;
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

    @PostMapping(value = "/save")
    @Transactional
    public ResponseEntity save(@RequestBody @Valid PlaceEntity item) {
        PlaceEntity newItem = placeService.save(item);
        return getItem(newItem);
    }

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
}
