package com.compass.backend.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class HabitStatusDto {
    @NotNull(message = "active cannot be null")
    private Boolean active;
}
