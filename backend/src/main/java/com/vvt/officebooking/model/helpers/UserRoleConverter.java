package com.vvt.officebooking.model.helpers;

import com.vvt.officebooking.model.entity.user.UserRole;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class UserRoleConverter extends SystemEnumConverter<UserRole> implements AttributeConverter<UserRole, String> {
}
