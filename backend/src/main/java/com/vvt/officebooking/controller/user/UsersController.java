package com.vvt.officebooking.controller.user;

import com.vvt.officebooking.config.CustomUserDetails;
import com.vvt.officebooking.model.dto.user.ResetPasswordDto;
import com.vvt.officebooking.model.dto.user.UserDto;
import com.vvt.officebooking.model.dto.user.UserLoginDto;
import com.vvt.officebooking.model.entity.user.User;
import com.vvt.officebooking.model.entity.user.UserRole;
import com.vvt.officebooking.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.vvt.officebooking.model.entity.user.UserRole.getSuitableRole;

@Slf4j
@RestController
@RequestMapping(value = "/api/user", produces = MediaType.APPLICATION_JSON_VALUE)
public class UsersController {
    @Autowired
    @Qualifier("authenticationManager")
    private AuthenticationManager authenticationManager;
    @Autowired
    private SessionRegistry sessionRegistry;
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity getUserResponseEntity() {
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            throw new IllegalStateException("User was not logged in");
        }
        return getUser();
    }

    private ResponseEntity getUser() {
        Object userPrincipal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (userPrincipal instanceof CustomUserDetails) {
            CustomUserDetails cud = (CustomUserDetails) userPrincipal;
            if (cud.getId() == null) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            return new ResponseEntity<>(new UserDto(cud,
                getRedirectUrlByRole(getSuitableRole(cud.getUserRoles()))),
                HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping(value = "/registration")
    public void register(@RequestBody User u) throws UserService.CreateUserException {
        userService.create(u);
    }

    @PostMapping(value = "/update")
    public void update(@RequestBody User u) {
        userService.update(u);
    }

    @PostMapping(value = "/login")
    public ResponseEntity loginUser(HttpServletRequest request, @RequestBody UserLoginDto userLogin) {
        String password = userLogin.getPassword();
        String email = userLogin.getEmail();
        if (email == null || password == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        email = email.toLowerCase();

        authenticateUser(email, password);
        Object userPrincipal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        addUserToSession(request, userPrincipal);
        return getUser();
    }

    private String getRedirectUrlByRole(UserRole ur) {
        if (ur == null) {
            return "/";
        }
        switch (ur) {
            case ADMIN:
                return "/";
            case USER:
                return "/";
        }
        return "/";
    }

    private void authenticateUser(String login, String password) {
        UsernamePasswordAuthenticationToken authentication =
            new UsernamePasswordAuthenticationToken(login, password);
        SecurityContextHolder.getContext()
            .setAuthentication(authenticationManager.authenticate(authentication));
    }

    private void addUserToSession(HttpServletRequest request, Object userPrincipal) {
        request.getSession().setMaxInactiveInterval(60 * 60 * 24);
        sessionRegistry.registerNewSession(request.getSession().getId(), userPrincipal);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/logout")
    public void logoutUser(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
    }


    @PostMapping(value = "/resetPassword")
    public void resetPassword(@RequestBody ResetPasswordDto resetPasswordDto) {
//    userService.resetPassword(resetPasswordDto.getToken(), resetPasswordDto.getPassword());
    }
}
