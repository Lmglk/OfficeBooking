package com.vvt.officebooking.service.room;

import com.vvt.officebooking.model.entity.user.room.RoomEntity;
import com.vvt.officebooking.repository.room.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class RoomService {
    private RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
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
}
