package com.vvt.officebooking.model.entity.place;

import com.vvt.officebooking.model.util.SystemEnumConverter;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class EquipmentConverter extends SystemEnumConverter<Equipment> implements AttributeConverter<Equipment, String> {
}
