package com.vvt.officebooking.controller.room;

import com.vvt.officebooking.model.entity.room.RoomEntity;
import com.vvt.officebooking.service.room.RoomService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;


// https://stackoverflow.com/questions/16170572/unable-to-mock-service-class-in-spring-mvc-controller-tests - пример для save
//https://stackoverflow.com/questions/16062842/mockito-injecting-null-values-into-a-spring-bean-when-using-mock?noredirect=1&lq=1

@RunWith(MockitoJUnitRunner.class)
@WebAppConfiguration
public class RoomControllerTest {
    private MockMvc mockMvc;

    @Mock
    private RoomService service;
    @InjectMocks
    private RoomController roomController;

    @Before
    public void setup() {
        this.mockMvc = standaloneSetup(roomController).build();

        // Mock one of the service methods
        when(service.list()).thenReturn(getRoomList());
    }

    @Test
    public void shouldRightList() throws Exception {
        mockMvc.perform(
                get("/api/room/all"))
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

    private List<RoomEntity> getRoomList() {
        RoomEntity room0 = new RoomEntity();
        room0.setName("A");
        room0.setHeight(1);
        room0.setWidth(2);
        room0.setDescription("a");

        RoomEntity room1 = new RoomEntity();
        room1.setName("B");
        room1.setHeight(1);
        room1.setWidth(2);
        room1.setDescription("b");

        return new ArrayList<>(Arrays.asList(room0, room1));
    }

    // http://qaru.site/questions/715932/what-is-the-best-way-to-test-controllers-and-services-with-junit
}