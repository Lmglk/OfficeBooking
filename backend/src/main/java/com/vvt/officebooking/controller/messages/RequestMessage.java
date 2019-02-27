package com.vvt.officebooking.controller.messages;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class RequestMessage {
    @NotNull
    Long id;
}
