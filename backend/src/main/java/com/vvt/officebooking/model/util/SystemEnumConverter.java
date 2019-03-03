package com.vvt.officebooking.model.util;

import com.vvt.officebooking.model.entity.user.SystemEnum;

import java.lang.reflect.ParameterizedType;

public class SystemEnumConverter<E extends SystemEnum> {

    public String convertToDatabaseColumn(E attribute) {
        return attribute.getCode();
    }

    public E convertToEntityAttribute(String dbData) {
        if (dbData == null) {
            return null;
        }
        for (E attribute : getEnumClass().getEnumConstants()) {
            if (attribute.getCode().equals(dbData)) {
                return attribute;
            }
        }
        throw new IllegalArgumentException("Unknown " + dbData);
    }

    private Class<E> getEnumClass() {
        //noinspection unchecked
        return (Class<E>) ((ParameterizedType) this.getClass().getGenericSuperclass()).getActualTypeArguments()[0];
    }
}

