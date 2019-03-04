package com.vvt.officebooking.service.user;

import com.vvt.officebooking.model.entity.user.User;
import com.vvt.officebooking.model.entity.user.UserRole;
import com.vvt.officebooking.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof AnonymousAuthenticationToken)
            return null;
        return (User) authentication.getPrincipal();
    }

    public User getUserByLogin(String login) {
        return userRepository.findByEmail(login);
    }

    public boolean isLoginAlreadyRegistered(String email) {
        return userRepository.countByEmail(email) == 0;
    }

    /**
     * Creates a new dto in a system.
     */
    public User create(User newUser) throws CreateUserException {
        if (newUser.getId() != null) {
            throw new IllegalStateException("Instance already has ID: " + newUser.getId() + " in " + newUser);
        }
        if (!isLoginAlreadyRegistered(newUser.getEmail())) {
            throw new CreateUserException("This email is already taken");
        }

        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        newUser.setEmail(newUser.getEmail().toLowerCase());

        newUser.setRole(UserRole.USER);

        newUser = userRepository.save(newUser);

        return newUser;
    }

    @Transactional
    public void update(User updatedUser) {
        User cud = getCurrentUser();
        User user = userRepository.findByIdExact(cud.getId());
        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            changePassword(updatedUser.getPassword());
        }
        if (updatedUser.getName() != null && !updatedUser.getName().isEmpty()) {
            user.setName(updatedUser.getName());
            cud.setName(updatedUser.getName());
        }
        userRepository.save(user);
    }

    public String getUserEmail(User to) {
        return to.getEmail();
    }

    private void changePassword(String newPassword) {
        User cud = getCurrentUser();
        User user = userRepository.findByIdExact(cud.getId());
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    public static class CreateUserException extends RuntimeException {
        public CreateUserException(String s) {
            super(s);
        }
    }

    public List<User> list() {
        return userRepository.findAll();
    }
}
