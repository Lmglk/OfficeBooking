package com.vvt.officebooking.model.entity.place;

import com.vvt.officebooking.model.entity.user.SystemEnum;
import lombok.Getter;

import javax.persistence.Convert;

@Getter
@Convert(converter = EquipmentConverter.class)
public enum Equipment implements SystemEnum {
    PC("0", "Computer"),
    PHONE("1", "Phone"),
    LAN("2", "Ethernet");

    private final String code;
    private final String description;

    Equipment(String code, String description) {
        this.code = code;
        this.description = description;
    }

    @Override
    public String getCode() {
        return null;
    }

    @Override
    public String getDescription() {
        return null;
    }
}
