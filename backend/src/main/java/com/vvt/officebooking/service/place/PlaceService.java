package com.vvt.officebooking.service.place;

import com.vvt.officebooking.controller.UtilService;
import com.vvt.officebooking.model.entity.place.PlaceEntity;
import com.vvt.officebooking.model.entity.room.RoomEntity;
import com.vvt.officebooking.repository.place.PlaceRepository;
import com.vvt.officebooking.service.room.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class PlaceService {
    private PlaceRepository placeRepository;
    private RoomService roomService;
    private UtilService utilService;

    @Autowired
    public PlaceService(PlaceRepository placeRepository, RoomService roomService, UtilService utilService) {
        this.placeRepository = placeRepository;
        this.roomService = roomService;
        this.utilService = utilService;
    }

    public PlaceEntity get(Long id) throws EntityNotFoundException {
        return placeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("id not found"));
    }

    public PlaceEntity save(PlaceEntity place, Long idRoom) {
        utilService.isAdmin();
        place.setRoom(getRoom(idRoom));
        return placeRepository.saveAndFlush(place);
    }

    public void remove(PlaceEntity place) {
        utilService.isAdmin();
        placeRepository.delete(place);
    }

    public List<PlaceEntity> list() {
        return placeRepository.findAll();
    }

    private RoomEntity getRoom(Long idRoom) {
        return roomService.get(idRoom);
    }
}
