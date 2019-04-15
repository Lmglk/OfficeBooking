package com.vvt.officebooking.controller.booking;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vvt.officebooking.controller.messages.RequestMessage;
import com.vvt.officebooking.model.entity.booking.BookingEntity;
import com.vvt.officebooking.service.booking.BookingService;
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
public class BookingControllerTest {
    private MockMvc mockMvc;
    private ObjectMapper mapper = new ObjectMapper();
    @Mock
    private BookingService service;
    @InjectMocks
    private BookingController controller;

    @Before
    public void setup() {
        this.mockMvc = standaloneSetup(controller).build();

        // Mock one of the service methods
        when(service.list()).thenReturn(getBookingList());
        when(service.save(any(BookingEntity.class), any())).thenReturn(getBooking(1L));
        when(service.get(any(Long.class))).thenReturn(getBooking(1L));
    }

    @Test
    public void get() throws Exception {
        BookingEntity expectedObj = getBooking(1L);
        RequestMessage requestMessage = new RequestMessage();
        requestMessage.setId(1L);
        MockHttpServletResponse response = mockMvc.perform(
                MockMvcRequestBuilders.post("/api/booking/get")
                        .content(mapper.writeValueAsBytes(requestMessage))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk())
                .andReturn().getResponse();

        String contentStr = response.getContentAsString();
        BookingEntity actualObj = mapper.readValue(contentStr, BookingEntity.class);
        assertObj(expectedObj, actualObj);
    }

    @Test
    public void save() throws Exception {
        BookingEntity expectedObj = getBooking(1L);
        MockHttpServletResponse response = mockMvc.perform(
                MockMvcRequestBuilders.post("/api/booking/save?idPlace=88")
                        .content(mapper.writeValueAsBytes(expectedObj))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk())
                .andReturn().getResponse();

        String contentStr = response.getContentAsString();
        BookingEntity actualObj = mapper.readValue(contentStr, BookingEntity.class);
        assertObj(expectedObj, actualObj);
    }

    @Test
    public void remove() throws Exception {
        BookingEntity expectedObj = getBooking(1L);
        mockMvc.perform(
                MockMvcRequestBuilders.post("/api/booking/remove")
                        .content(mapper.writeValueAsBytes(expectedObj))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());
    }

    @Test
    public void list() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/booking/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[1].id", is(2))
                );
    }


    @Test
    public void shouldNotSave() throws Exception {
        BookingEntity expectedObj = getBadBooking();
        when(service.save(any(BookingEntity.class), any())).thenReturn(expectedObj);

        mockMvc.perform(
                MockMvcRequestBuilders.post("/api/booking/save?idPlace=88")
                        .content(mapper.writeValueAsBytes(expectedObj))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isBadRequest())
                .andReturn().getResponse();
    }

    private void assertObj(BookingEntity expectedObj, BookingEntity actualObj) {
        Assert.assertEquals(expectedObj.getId(), actualObj.getId());
    }

    private List<BookingEntity> getBookingList() {
        BookingEntity booking0 = getBooking(1L);
        BookingEntity booking1 = getBooking(2L);

        return new ArrayList<>(Arrays.asList(booking0, booking1));
    }

    private BookingEntity getBooking(Long id) {
        BookingEntity obj = new BookingEntity();
        obj.setId(id);
        return obj;
    }

    private BookingEntity getBadBooking() {
        return new BookingEntity();
    }
}