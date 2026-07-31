package com.compass.backend.dto;

import com.compass.backend.entity.Frequency;
import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.DayOfWeek;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class HabitRequestDto {
    @NotBlank(message = "name cannot be blank")
    private String name;
    private String description;
    @NotNull
    private Frequency frequency;
    @NotNull
    private Set<DayOfWeek> activeDays = new HashSet<>();

    @AssertTrue(message = "Specific days must include at least one day")
    private boolean isValidCadence() {
        if (frequency == Frequency.SPECIFIC_DAYS) {
            return activeDays != null && !activeDays.isEmpty();
        }
        return true;
    }

}

