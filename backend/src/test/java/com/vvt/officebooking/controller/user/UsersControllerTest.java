package com.vvt.officebooking.controller.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vvt.officebooking.model.entity.user.User;
import com.vvt.officebooking.service.user.UserService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
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
public class UsersControllerTest {
    private MockMvc mockMvc;
    private ObjectMapper mapper = new ObjectMapper();
    @Mock
    private UserService service;
    @InjectMocks
    private UsersController controller;

    @Before
    public void setup() {
        this.mockMvc = standaloneSetup(controller).build();

        // Mock one of the service methods
        when(service.list()).thenReturn(getUserList());
        when(service.create(any(User.class))).thenReturn(getUser("emailTest", "passwordTest"));
//        when(service.save(any(PlaceEntity.class), any())).thenReturn(getPlace("A"));
//        when(service.get(any(Long.class))).thenReturn(getPlace("A"));
    }

    @Test
    public void getUserResponseEntity() {
    }

    @Test
    public void register() throws Exception {
        User expectedObj = getUser("emailTest", "passwordTest");
        mockMvc.perform(
                MockMvcRequestBuilders.post("/api/user/registration")
                        .content(mapper.writeValueAsBytes(expectedObj))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());
    }

    @Test
    public void update() {
    }

    @Test
    public void loginUser() {
    }

    @Test
    public void logoutUser() {
    }

    @Test
    public void resetPassword() {
    }

    @Test
    public void list() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/user/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$[0].id", is(123)))
                .andExpect(jsonPath("$[0].email", is("i.ivanov@gmail.com")))
                .andExpect(jsonPath("$[0].password", is("qwerty123")))
                .andExpect(jsonPath("$[1].id", is(123)))
                .andExpect(jsonPath("$[1].email", is("p.petrov@gmail.com")))
                .andExpect(jsonPath("$[1].password", is("123qwerty"))
                );
    }

    private void assertObj(User expectedObj, User actualObj) {
        Assert.assertEquals(expectedObj.getId(), actualObj.getId());
        Assert.assertEquals(expectedObj.getEmail(), actualObj.getEmail());
        Assert.assertEquals(expectedObj.getPassword(), actualObj.getPassword());
    }

    private List<User> getUserList() {
        User user0 = getUser("i.ivanov@gmail.com", "qwerty123");
        User user1 = getUser("p.petrov@gmail.com", "123qwerty");

        return new ArrayList<>(Arrays.asList(user0, user1));
    }

    private User getUser(String email, String password) {
        User obj = new User();
        obj.setId(123L);
        obj.setEmail(email);
        obj.setPassword(password);
        return obj;
    }
}