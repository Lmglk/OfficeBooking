package com.vvt.officebooking.service.user.room;

import com.vvt.officebooking.model.entity.user.place.PlaceEntity;
import com.vvt.officebooking.repository.user.room.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class PlaceService {
    private PlaceRepository placeRepository;

    @Autowired
    public PlaceService(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    public PlaceEntity get(Long id) throws EntityNotFoundException {
        return placeRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("id not found"));
    }

    public PlaceEntity save(PlaceEntity place) {
        return placeRepository.saveAndFlush(place);
    }

    public void remove(PlaceEntity place) {
        placeRepository.delete(place);
    }
}
