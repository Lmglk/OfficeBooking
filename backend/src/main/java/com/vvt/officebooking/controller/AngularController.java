package com.vvt.officebooking.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
@ControllerAdvice
@PropertySource(value = "classpath:/development.properties", ignoreResourceNotFound = true)
public class AngularController {

    private static final String INDEX = "index";
    private static String BUILD_ID_ATTR = "buildId";
    @Value("${teamcity.build.id:0}")
    private String buildId;

    @GetMapping(value = {"/login", "/registration", "/changePassword"})
    public ModelAndView angularLogin() {
        return new ModelAndView(INDEX, new ModelMap(BUILD_ID_ATTR, buildId));
    }

    @GetMapping(value = {"/logout"})
    public String angularLogout() {
        return "redirect:/login";
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = {"/"})
    public ModelAndView angularIndex() {
        return new ModelAndView(INDEX, new ModelMap(BUILD_ID_ATTR, buildId));
    }

    @GetMapping(value = {"/deniedAccess"})
    public ModelAndView deniedPage() {
        return new ModelAndView(INDEX, new ModelMap(BUILD_ID_ATTR, buildId));
    }

    @ResponseBody
    @ExceptionHandler({AuthenticationException.class, AccessDeniedException.class})
    public ResponseEntity<Object> handleAccessDeniedException(Exception e) {
        String errorMessage;
        HttpStatus errorStatus = HttpStatus.FORBIDDEN;
        if (e instanceof InternalAuthenticationServiceException) {
            errorMessage = "Access is denied. You are banned.";
        } else {//AccessDeniedException
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.set("Location", "/deniedAccess");
            return new ResponseEntity<>(httpHeaders, HttpStatus.TEMPORARY_REDIRECT);
        }
        log.debug("{}", errorMessage);

        return new ResponseEntity<>(errorMessage, new HttpHeaders(), errorStatus);
    }
}
