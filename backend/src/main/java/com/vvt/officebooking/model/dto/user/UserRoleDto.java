package com.vvt.officebooking.model.dto.user;

import com.vvt.officebooking.model.entity.user.UserRole;
import lombok.Data;

@Data
public class UserRoleDto {
    public String description;
    public String code;
    public String name;

    public UserRoleDto(UserRole ur) {
        this.description = ur.getDescription();
        this.code = ur.getCode();
        this.name = ur.toString();
    }
}
