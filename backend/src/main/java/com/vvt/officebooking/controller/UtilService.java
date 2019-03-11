package com.vvt.officebooking.controller;

import com.vvt.officebooking.model.entity.user.User;
import com.vvt.officebooking.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilService {
    private UserService userService;

    @Autowired
    public UtilService(UserService userService) {
        this.userService = userService;
    }

    public void isAdmin() {
        User currentUser = userService.getCurrentUser();
        if (!currentUser.getRole().isAdmin()) {
            throw new IllegalStateException("This operation is not available");
        }
    }
}
