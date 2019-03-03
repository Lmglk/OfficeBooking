package com.vvt.officebooking.service.place;

import com.vvt.officebooking.model.entity.place.PlaceEntity;
import com.vvt.officebooking.repository.place.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

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

    public List<PlaceEntity> list() throws EntityNotFoundException {
        return placeRepository.findAll();
    }
}
