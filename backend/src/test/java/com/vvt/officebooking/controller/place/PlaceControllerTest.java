package com.vvt.officebooking.controller.place;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vvt.officebooking.controller.messages.RequestMessage;
import com.vvt.officebooking.model.entity.place.PlaceEntity;
import com.vvt.officebooking.service.place.PlaceService;
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
public class PlaceControllerTest {
    private MockMvc mockMvc;
    private ObjectMapper mapper = new ObjectMapper();
    @Mock
    private PlaceService service;
    @InjectMocks
    private PlaceController controller;

    @Before
    public void setup() {
        this.mockMvc = standaloneSetup(controller).build();

        // Mock one of the service methods
        when(service.list()).thenReturn(getPlaceList());
        when(service.save(any(PlaceEntity.class), any())).thenReturn(getPlace("A"));
        when(service.get(any(Long.class))).thenReturn(getPlace("A"));
    }

    @Test
    public void get() throws Exception {
        PlaceEntity expectedObj = getPlace("A");
        RequestMessage requestMessage = new RequestMessage();
        requestMessage.setId(123L);
        MockHttpServletResponse response = mockMvc.perform(
                MockMvcRequestBuilders.post("/api/place/get")
                        .content(mapper.writeValueAsBytes(requestMessage))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk())
                .andReturn().getResponse();

        String contentStr = response.getContentAsString();
        PlaceEntity actualObj = mapper.readValue(contentStr, PlaceEntity.class);
        assertObj(expectedObj, actualObj);
    }

    @Test
    public void save() throws Exception {
        PlaceEntity expectedObj = getPlace("A");
        MockHttpServletResponse response = mockMvc.perform(
                MockMvcRequestBuilders.post("/api/place/save?idRoom=102")
                        .content(mapper.writeValueAsBytes(expectedObj))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk())
                .andReturn().getResponse();

        String contentStr = response.getContentAsString();
        PlaceEntity actualObj = mapper.readValue(contentStr, PlaceEntity.class);
        assertObj(expectedObj, actualObj);
    }

    @Test
    public void remove() throws Exception {
        PlaceEntity expectedObj = getPlace("A");
        mockMvc.perform(
                MockMvcRequestBuilders.post("/api/place/remove")
                        .content(mapper.writeValueAsBytes(expectedObj))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());
    }

    @Test
    public void list() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/place/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$[0].id", is(123)))
                .andExpect(jsonPath("$[0].name", is("A")))
                .andExpect(jsonPath("$[0].isAvailableForBooking", is(true)))
                .andExpect(jsonPath("$[0].x", is(1)))
                .andExpect(jsonPath("$[0].y", is(2)))
                .andExpect(jsonPath("$[1].id", is(123)))
                .andExpect(jsonPath("$[1].name", is("B")))
                .andExpect(jsonPath("$[1].isAvailableForBooking", is(true)))
                .andExpect(jsonPath("$[1].x", is(1)))
                .andExpect(jsonPath("$[1].y", is(2))
                );
    }

    @Test
    public void shouldNotSave() throws Exception {
        PlaceEntity expectedObj = getBadPlace("A");
        when(service.save(any(PlaceEntity.class), any())).thenReturn(expectedObj);

        mockMvc.perform(
                MockMvcRequestBuilders.post("/api/place/save?idRoom=102")
                        .content(mapper.writeValueAsBytes(expectedObj))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isBadRequest())
                .andReturn().getResponse();
    }

    private void assertObj(PlaceEntity expectedObj, PlaceEntity actualObj) {
        Assert.assertEquals(expectedObj.getId(), actualObj.getId());
        Assert.assertEquals(expectedObj.getName(), actualObj.getName());
        Assert.assertEquals(expectedObj.getIsAvailableForBooking(), actualObj.getIsAvailableForBooking());
        Assert.assertEquals(expectedObj.getX(), actualObj.getX());
        Assert.assertEquals(expectedObj.getY(), actualObj.getY());
    }

    private List<PlaceEntity> getPlaceList() {
        PlaceEntity place0 = getPlace("A");
        PlaceEntity place1 = getPlace("B");

        return new ArrayList<>(Arrays.asList(place0, place1));
    }

    private PlaceEntity getPlace(String name) {
        PlaceEntity obj = new PlaceEntity();
        obj.setId(123L);
        obj.setName(name);
        obj.setIsAvailableForBooking(true);
        obj.setX(1);
        obj.setY(2);
        return obj;
    }

    private PlaceEntity getBadPlace(String name) {
        PlaceEntity place = getPlace(name);
        place.setId(null);
        return place;
    }
}