package com.vvt.officebooking.controller.room;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vvt.officebooking.controller.messages.RequestMessage;
import com.vvt.officebooking.model.entity.room.RoomEntity;
import com.vvt.officebooking.service.room.RoomService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

@RunWith(MockitoJUnitRunner.Silent.class)
@WebAppConfiguration
public class RoomControllerTest {
    private MockMvc mockMvc;
    private ObjectMapper mapper = new ObjectMapper();
    @Mock
    private RoomService service;
    @InjectMocks
    private RoomController roomController;

    @Before
    public void setup() {
        this.mockMvc = standaloneSetup(roomController).build();

        // Mock one of the service methods
        when(service.list()).thenReturn(getRoomList());
        when(service.save(any(RoomEntity.class))).thenReturn(getRoom("A", "a"));
        when(service.get(any(Long.class))).thenReturn(getRoom("A", "a"));
    }

    @Test
    public void shouldRightList() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/room/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$[0].name", is("A")))
                .andExpect(jsonPath("$[0].height", is(1)))
                .andExpect(jsonPath("$[0].width", is(2)))
                .andExpect(jsonPath("$[0].description", is("a")))
                .andExpect(jsonPath("$[1].name", is("B")))
                .andExpect(jsonPath("$[1].height", is(1)))
                .andExpect(jsonPath("$[1].width", is(2)))
                .andExpect(jsonPath("$[1].description", is("b"))
                );
    }

    @Test
    public void get() throws Exception {
        RoomEntity expectedRoom = getRoom("A", "a");
        RequestMessage requestMessage = new RequestMessage();
        requestMessage.setId(123L);
        MockHttpServletResponse response = mockMvc.perform(
                MockMvcRequestBuilders.post("/api/room/get")
                        .content(mapper.writeValueAsBytes(requestMessage))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk())
                .andReturn().getResponse();

        String contentStr = response.getContentAsString();
        RoomEntity actualRoom = mapper.readValue(contentStr, RoomEntity.class);
        assertRoom(expectedRoom, actualRoom);
    }

    @Test
    public void save() throws Exception {
        RoomEntity expectedRoom = getRoom("A", "a");
        MockHttpServletResponse response = mockMvc.perform(
                MockMvcRequestBuilders.post("/api/room/save")
                        .content(mapper.writeValueAsBytes(expectedRoom))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk())
                .andReturn().getResponse();

        String contentStr = response.getContentAsString();
        RoomEntity actualRoom = mapper.readValue(contentStr, RoomEntity.class);
        assertRoom(expectedRoom, actualRoom);
    }

    @Test
    public void shouldNotSave() throws Exception {
        RoomEntity expectedRoom = getBadRoom("A", "a");
        when(service.save(any(RoomEntity.class))).thenReturn(expectedRoom);

        mockMvc.perform(
                MockMvcRequestBuilders.post("/api/room/save")
                        .content(mapper.writeValueAsBytes(expectedRoom))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isBadRequest())
                .andReturn().getResponse();
    }

    @Test
    public void remove() throws Exception {
        RoomEntity expectedRoom = getRoom("A", "a");
        mockMvc.perform(
                MockMvcRequestBuilders.post("/api/room/remove")
                        .content(mapper.writeValueAsBytes(expectedRoom))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());
    }

    private void assertRoom(RoomEntity expectedRoom, RoomEntity actualRoom) {
        Assert.assertEquals(expectedRoom.getId(), actualRoom.getId());
        Assert.assertEquals(expectedRoom.getName(), actualRoom.getName());
        Assert.assertEquals(expectedRoom.getHeight(), actualRoom.getHeight());
        Assert.assertEquals(expectedRoom.getWidth(), actualRoom.getWidth());
        Assert.assertEquals(expectedRoom.getDescription(), actualRoom.getDescription());
    }

    private List<RoomEntity> getRoomList() {
        RoomEntity room0 = getRoom("A", "a");
        RoomEntity room1 = getRoom("B", "b");

        return new ArrayList<>(Arrays.asList(room0, room1));
    }

    private RoomEntity getRoom(String name, String description) {
        RoomEntity room = new RoomEntity();
        room.setId(123L);
        room.setName(name);
        room.setHeight(1);
        room.setWidth(2);
        room.setDescription(description);
        return room;

    }

    private RoomEntity getBadRoom(String name, String description) {
        RoomEntity room = getRoom(name, description);
        room.setId(null);
        return room;
    }
}