package com.vvt.officebooking.model.dto.user;

import com.vvt.officebooking.model.entity.user.User;
import com.vvt.officebooking.model.entity.user.UserRole;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private Long organizationId;
    private String organization;
    private String affiliation;
    private String email;
    private Set<UserRole> roles;
    private String redirectUrl;
    private String displayName;
    private boolean verified;
    private String status;

    public UserDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.displayName = user.getDisplayName();
        this.email = user.getEmail();
        this.roles = user.getRoles();
        this.redirectUrl = "";
        this.status = getStatus(user.getRoles());
    }

    public UserDto(User user, String redirectUrl) {
        this.id = user.getId();
        this.name = user.getName();
        this.displayName = user.getDisplayName();
        this.email = user.getEmail();
        this.roles = user.getRoles();
        this.status = getStatus(user.getRoles());
        this.redirectUrl = redirectUrl;
    }

    private String getStatus(Set<UserRole> userRoles) {
        if (userRoles.isEmpty()) {
            return "Not approved";
        }
        return "Accepted";
    }
}
