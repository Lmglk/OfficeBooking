package com.vvt.officebooking.service.room;

import com.vvt.officebooking.controller.UtilService;
import com.vvt.officebooking.model.entity.room.RoomEntity;
import com.vvt.officebooking.repository.room.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class RoomService {
    private RoomRepository roomRepository;
    private UtilService utilService;

    @Autowired
    public RoomService(RoomRepository roomRepository, UtilService utilService) {
        this.roomRepository = roomRepository;
        this.utilService = utilService;
    }

    public RoomEntity get(Long id) throws EntityNotFoundException {
        return roomRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("id not found"));
    }

    public RoomEntity save(RoomEntity room) {
        return roomRepository.saveAndFlush(room);
    }

    public void remove(RoomEntity room) {
        roomRepository.delete(room);
    }


    public List<RoomEntity> list() {
        return roomRepository.findAll();
    }
}
