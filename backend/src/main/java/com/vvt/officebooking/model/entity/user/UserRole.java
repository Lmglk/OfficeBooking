package com.vvt.officebooking.model.entity.user;

import com.vvt.officebooking.model.util.UserRoleConverter;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Convert;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Convert(converter = UserRoleConverter.class)
public enum UserRole implements SystemEnum, GrantedAuthority {
    USER("U", "User", true),
    ADMIN("A", "Administration", true);

    private final String code;
    private final String description;
    private final boolean available;

    UserRole(String code, String description, boolean available) {
        this.code = code;
        this.description = description;
        this.available = available;
    }

    public static List<UserRole> getAvailableRoles() {
        List<UserRole> roles = new ArrayList<>();
        for (UserRole ur : UserRole.values()) {
            if (ur.isAvailable()) roles.add(ur);
        }
        return roles;
    }

    public static UserRole resolveByCode(String code) {
        for (UserRole r : values()) {
            if (r.getCode().equals(code))
                return r;
        }
        return null;
    }

    public static UserRole getSuitableRole(Set<UserRole> userRoles) {
        if (userRoles == null) {
            return null;
        }

        if (userRoles.size() == 1) {
            return (UserRole) userRoles.toArray()[0];
        }

        if (userRoles.contains(ADMIN)) {
            return ADMIN;
        }

        return null;
    }

    public String getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }

    public boolean isAdmin() {
        return this.equals(ADMIN);
    }

    public boolean isAvailable() {
        return available;
    }

    @Override
    public String getAuthority() {
        return getCode();
    }
}
