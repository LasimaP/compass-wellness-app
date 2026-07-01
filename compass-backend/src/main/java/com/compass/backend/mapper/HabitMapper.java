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
    public Habit mapToHabit(HabitRequestDto requestDto) {
        Habit habit = new Habit();
        habit.setName(requestDto.getName());
        habit.setDescription(requestDto.getDescription());
        habit.setActive(requestDto.isActive());
        habit.setCreatedDate(LocalDate.now());

        return habit;
    }

    // Entity -> ResponseDto (for returning data)
    public HabitResponseDto mapToHabitResponseDto(Habit habit) {
        HabitResponseDto responseDto = new HabitResponseDto();

        responseDto.setId(habit.getId());
        responseDto.setName(habit.getName());
        responseDto.setDescription(habit.getDescription());
        responseDto.setActive(habit.isActive());
        responseDto.setCreatedDate(habit.getCreatedDate());

        return responseDto;
    }

    // RequestDto -> existing Entity (for UPDATE)
    public void updateHabitFromDto(HabitRequestDto requestDto, Habit habit) {
        habit.setName(requestDto.getName());
        habit.setDescription(requestDto.getDescription());
        habit.setActive(requestDto.isActive());
    }

    // List of entities -> List of ResponseDtos
    public List<HabitResponseDto> mapToHabitResponseDtoList(List<Habit> habits) {
        return habits.stream()
                .map(this::mapToHabitResponseDto)
                .collect(Collectors.toList());
    }
}
