package com.compass.backend.mapper;

import com.compass.backend.dto.HabitRequestDto;
import com.compass.backend.dto.HabitResponseDto;
import com.compass.backend.entitiy.Habit;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class HabitMapper {

    // RequestDto -> Entity (for CREATE)
    public Habit mapToHabit(HabitRequestDto request) {
        Habit habit = new Habit();
        habit.setName(request.getName());
        habit.setDescription(request.getDescription());
        habit.setActive(request.isActive());
        habit.setCreatedDate(LocalDate.now());

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

        return response;
    }

    // RequestDto -> existing Entity (for UPDATE)
    public void updateHabitFromDto(HabitRequestDto request, Habit habit) {
        habit.setName(request.getName());
        habit.setDescription(request.getDescription());
        habit.setActive(request.isActive());
        habit.setCreatedDate(LocalDate.now());
    }

    // List of entities -> List of ResponseDtos
    public List<HabitResponseDto> mapToHabitResponseDtoList(List<Habit> habits) {
        return habits.stream()
                .map(this::mapToHabitResponseDto)
                .collect(Collectors.toList());
    }
}
