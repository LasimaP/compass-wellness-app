package com.compass.backend.dto;

import com.compass.backend.entity.Frequency;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class HabitResponseDto {
    private Long id;
    private String name;
    private String description;
    private boolean active;
    private LocalDate createdDate;
    private Frequency frequency;
    private Set<DayOfWeek> activeDays = new HashSet<>();
}
