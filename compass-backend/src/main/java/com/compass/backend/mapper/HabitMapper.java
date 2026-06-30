package com.compass.backend.mapper;

import com.compass.backend.dto.HabitRequestDto;
import com.compass.backend.dto.HabitResponseDto;
import com.compass.backend.entitiy.Habit;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class HabitMapper {

    // RequestDto -> Entity (for CREATE)
    public Habit mapToHabit(HabitRequestDto dto) {
        Habit habit = new Habit();
        habit.setName(dto.getName());
        habit.setDescription(dto.getDescription());
        habit.setActive(dto.isActive());

        return habit;
    }

    // Entity -> ResponseDto (for returning data)
    public HabitResponseDto mapToHabitResponseDto(Habit habit) {
        HabitResponseDto dto = new HabitResponseDto();

        dto.setId(habit.getId());
        dto.setName(habit.getName());
        dto.setDescription(habit.getDescription());
        dto.setActive(habit.isActive());
        dto.setCreatedDate(habit.getCreatedDate());

        return dto;
    }

    // RequestDto -> existing Entity (for UPDATE)
    public void updateHabitFromDto(HabitRequestDto dto, Habit habit) {
        habit.setName(dto.getName());
        habit.setDescription(dto.getDescription());
        habit.setActive(dto.isActive());
    }

    // List of entities -> List of ResponseDtos
    public List<HabitResponseDto> mapToHabitResponseDtoList(List<Habit> habits) {
        return habits.stream()
                .map(this::mapToHabitResponseDto)
                .collect(Collectors.toList());
    }
}
