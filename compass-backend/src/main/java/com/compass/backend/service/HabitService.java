package com.compass.backend.service;

import com.compass.backend.dto.HabitRequestDto;
import com.compass.backend.dto.HabitResponseDto;
import com.compass.backend.dto.HabitStatusDto;

import java.util.List;

public interface HabitService {
    HabitResponseDto createHabit(HabitRequestDto request);

    HabitResponseDto getHabitById(Long habitId);

    List<HabitResponseDto> getAllHabits();

    HabitResponseDto updateHabit(Long habitId, HabitRequestDto request);

    HabitResponseDto updateStatus(Long habitId, HabitStatusDto status);

    void deleteHabit(Long habitId);



}
