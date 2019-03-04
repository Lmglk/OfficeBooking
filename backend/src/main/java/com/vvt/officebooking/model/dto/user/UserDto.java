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
    private String email;
    private UserRole role;
    private String redirectUrl;
    private String displayName;

    public UserDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.displayName = user.getDisplayName();
        this.email = user.getEmail();
        this.role = user.getRole();
        this.redirectUrl = "";
    }

    public UserDto(User user, String redirectUrl) {
        this.id = user.getId();
        this.name = user.getName();
        this.displayName = user.getDisplayName();
        this.email = user.getEmail();
        this.role = user.getRole();
        this.redirectUrl = redirectUrl;
    }
}
