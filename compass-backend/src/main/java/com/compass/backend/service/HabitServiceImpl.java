package com.compass.backend.service;

import com.compass.backend.dto.HabitRequestDto;
import com.compass.backend.dto.HabitResponseDto;
import com.compass.backend.mapper.HabitMapper;
import com.compass.backend.repository.HabitRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class HabitServiceImpl implements HabitService {

    private final HabitRepository habitRepository;
    private final HabitMapper habitMapper;

    @Override
    public HabitResponseDto createHabit(HabitRequestDto requestDto) {
        return null;
    }

    @Override
    public HabitResponseDto getHabitById(Long habitId) {
        return null;
    }

    @Override
    public List<HabitResponseDto> getAllHabits() {
        return List.of();
    }

    @Override
    public HabitResponseDto updateHabit(Long habitId, HabitRequestDto requestDto) {
        return null;
    }

    @Override
    public void deleteHabit(Long habitId) {

    }
}
