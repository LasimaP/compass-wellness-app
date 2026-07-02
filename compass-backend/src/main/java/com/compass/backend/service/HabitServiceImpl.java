package com.compass.backend.service;

import com.compass.backend.dto.HabitRequestDto;
import com.compass.backend.dto.HabitResponseDto;
import com.compass.backend.entitiy.Habit;
import com.compass.backend.exception.ResourceNotFoundException;
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
    public HabitResponseDto createHabit(HabitRequestDto request) {
        Habit habit = habitMapper.mapToHabit(request);
        Habit savedHabit = habitRepository.save(habit);

        return habitMapper.mapToHabitResponseDto(savedHabit);
    }

    @Override
    public HabitResponseDto getHabitById(Long habitId) {
        Habit habit = habitRepository.findById(habitId).orElseThrow(() ->
                new ResourceNotFoundException("Habit does not exist with given id : " + habitId));

        return habitMapper.mapToHabitResponseDto(habit);
    }

    @Override
    public List<HabitResponseDto> getAllHabits() {
        List<Habit> habits = habitRepository.findAll();
        return habitMapper.mapToHabitResponseDtoList(habits);
    }

    @Override
    public HabitResponseDto updateHabit(Long habitId, HabitRequestDto request) {
        Habit habit = habitRepository.findById(habitId).orElseThrow(() ->
                new ResourceNotFoundException("Habit does not exist with given id : " + habitId));

        habitMapper.updateHabitFromDto(request, habit);

        Habit updatedHabit = habitRepository.save(habit);

        return habitMapper.mapToHabitResponseDto(updatedHabit);
    }

    @Override
    public void deleteHabit(Long habitId) {
        habitRepository.findById(habitId).orElseThrow(() ->
                new ResourceNotFoundException("Habit does not exist with given id : " + habitId));

        habitRepository.deleteById(habitId);
    }
}
