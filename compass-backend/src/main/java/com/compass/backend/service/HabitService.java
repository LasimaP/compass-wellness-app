package com.compass.backend.service;

import com.compass.backend.dto.HabitRequestDto;
import com.compass.backend.dto.HabitResponseDto;

import java.util.List;

public interface HabitService {
    HabitResponseDto createHabit(HabitRequestDto requestDto);

    HabitResponseDto getHabitById(Long habitId);

    List<HabitResponseDto> getAllHabits();

    HabitResponseDto updateHabit(Long habitId, HabitRequestDto requestDto);

    void deleteHabit(Long habitId);

}
