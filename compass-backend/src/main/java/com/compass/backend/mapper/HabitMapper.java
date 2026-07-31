package com.compass.backend.mapper;

import com.compass.backend.dto.HabitRequestDto;
import com.compass.backend.dto.HabitResponseDto;
import com.compass.backend.entity.Frequency;
import com.compass.backend.entity.Habit;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class HabitMapper {

    // RequestDto -> Entity (for CREATE)
    public Habit mapToHabit(HabitRequestDto request) {
        Habit habit = new Habit();
        habit.setName(request.getName());
        habit.setDescription(request.getDescription());
        habit.setActive(true);
        habit.setCreatedDate(LocalDate.now());
        applyCadence(habit, request);

        return habit;
    }

    // Entity -> ResponseDto (for returning data)
    public HabitResponseDto mapToHabitResponseDto(Habit habit) {
        HabitResponseDto response = new HabitResponseDto();

        response.setId(habit.getId());
        response.setName(habit.getName());
        response.setDescription(habit.getDescription());
        response.setActive(habit.isActive());
        response.setCreatedDate(habit.getCreatedDate());
        response.setFrequency(habit.getFrequency());
        Set<DayOfWeek> activeDaysCopy = new HashSet<>(habit.getActiveDays());
        response.setActiveDays(activeDaysCopy);

        return response;
    }

    // RequestDto -> existing Entity (for UPDATE)
    public void updateHabitFromDto(HabitRequestDto request, Habit habit) {
        habit.setName(request.getName());
        habit.setDescription(request.getDescription());
        habit.setActive(request.isActive());
        applyCadence(habit, request);
    }

    // List of entities -> List of ResponseDtos
    public List<HabitResponseDto> mapToHabitResponseDtoList(List<Habit> habits) {
        return habits.stream()
                .map(this::mapToHabitResponseDto)
                .collect(Collectors.toList());
    }

    private void applyCadence(Habit habit, HabitRequestDto request) {
        habit.setFrequency(request.getFrequency());
        habit.getActiveDays().clear();
        if (request.getFrequency() == Frequency.SPECIFIC_DAYS) {
            habit.getActiveDays().addAll(request.getActiveDays());
        }
    }
}
