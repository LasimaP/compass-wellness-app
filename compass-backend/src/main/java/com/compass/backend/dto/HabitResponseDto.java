package com.compass.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HabitResponseDto {
    private Long id;
    private String name;
    private String description;
    private boolean active;
    private LocalDate createdDate;
}
