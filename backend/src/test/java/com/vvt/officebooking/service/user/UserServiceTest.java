package com.vvt.officebooking.service.user;

import com.vvt.officebooking.model.entity.user.User;
import com.vvt.officebooking.repository.user.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.Silent.class)
@WebAppConfiguration
public class UserServiceTest {
    @InjectMocks
    private UserService service;

    @Mock
    private UserRepository repository;

    @Before
    public void setup() {
        // Mock one of the service methods
        when(repository.findByEmail(any())).thenReturn(getUser());
        when(repository.save(any())).thenReturn(getUserWithId());
        when(repository.findByIdExact(any())).thenReturn(getUserWithId());

        // mock authentication
        Authentication authentication = Mockito.mock(Authentication.class);
        SecurityContext securityContext = Mockito.mock(SecurityContext.class);
        when(securityContext.getAuthentication()).thenReturn(authentication);
        SecurityContextHolder.setContext(securityContext);
    }

    @Test
    public void getUserByLogin() {
        User userByLogin = service.getUserByLogin("testEmail@ved");
        User actualUser = getUser();
        assertObj(actualUser, userByLogin);
    }

    @Test(expected = IllegalStateException.class)
    public void ShouldThrowIllegalStateExceptionWhenCreateUser() {
        User user = getUserWithId();
        service.create(user);
    }

    @Test(expected = UserService.CreateUserException.class)
    public void ShouldCreateUserExceptionWhenCreateUser() {
        when(repository.countByEmail(any())).thenReturn(1L);

        User user = getUser();
        service.create(user);
    }

    @Test
    public void create() {
        User user = getUser();
        User createdUser = service.create(user);
        User actualUser = getUserWithId();
        assertObj(actualUser, createdUser);
    }

    @Test
    public void update() {
        User existingUser = getUserWithId();
        User newUser = getUserWithId();
        newUser.setName("Andrey");
        newUser.setPassword("newPassword");

        when(service.getCurrentUser()).thenReturn(existingUser);
        when(repository.save(any())).thenReturn(newUser);

        User updatedUser = service.update(newUser);
        assertObj(newUser, updatedUser);
    }

    private User getUserWithId() {
        User user = getUser();
        user.setId(1234L);

        return user;
    }

    private User getUser() {
        User user = new User();
        user.setName("testName");
        user.setEmail("testEmail@ved");
        user.setPassword("testPassword");

        return user;
    }

    private void assertObj(User expectedObj, User actualObj) {
        Assert.assertEquals(expectedObj.getId(), actualObj.getId());
        Assert.assertEquals(expectedObj.getName(), actualObj.getName());
        Assert.assertEquals(expectedObj.getEmail(), actualObj.getEmail());
        Assert.assertEquals(expectedObj.getPassword(), actualObj.getPassword());
    }
}