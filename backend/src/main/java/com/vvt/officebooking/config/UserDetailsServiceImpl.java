package com.vvt.officebooking.config;

import com.vvt.officebooking.model.entity.user.User;
import com.vvt.officebooking.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String name) {
        User user = userService.getUserByLogin(name);
        if (null == user) {
            throw new UsernameNotFoundException("No dto present with username: " + name);
        }

        return new CustomUserDetails(user);
    }
}
