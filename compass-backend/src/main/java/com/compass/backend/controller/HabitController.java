package com.compass.backend.controller;

import com.compass.backend.dto.HabitRequestDto;
import com.compass.backend.dto.HabitResponseDto;
import com.compass.backend.service.HabitService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/habits")
public class HabitController {

    private final HabitService habitService;

    // Build Add Habit REST API
    @PostMapping
    public ResponseEntity<HabitResponseDto> createHabit(@RequestBody HabitRequestDto requestDto) {
        HabitResponseDto responseDto = habitService.createHabit(requestDto);

        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    // Build Get Habit REST API
    @GetMapping("{id}")
    public ResponseEntity<HabitResponseDto> getHabitById(@PathVariable("id") Long habitId) {
        HabitResponseDto responseDto = habitService.getHabitById(habitId);

        return ResponseEntity.ok(responseDto);
    }

}
