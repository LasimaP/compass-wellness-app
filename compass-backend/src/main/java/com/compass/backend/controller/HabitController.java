package com.compass.backend.controller;

import com.compass.backend.dto.HabitRequestDto;
import com.compass.backend.dto.HabitResponseDto;
import com.compass.backend.dto.HabitStatusDto;
import com.compass.backend.service.HabitService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/habits")
public class HabitController {

    private final HabitService habitService;

    @PostMapping
    public ResponseEntity<HabitResponseDto> createHabit(@Valid @RequestBody HabitRequestDto request) {
        HabitResponseDto response = habitService.createHabit(request);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<HabitResponseDto> getHabitById(@PathVariable("id") Long habitId) {
        HabitResponseDto response = habitService.getHabitById(habitId);

        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<HabitResponseDto>> getAllHabits() {
        List<HabitResponseDto> response = habitService.getAllHabits();

        return ResponseEntity.ok(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<HabitResponseDto> updateHabitById(@PathVariable("id") Long habitId,
                                                            @Valid @RequestBody HabitRequestDto request) {
        HabitResponseDto response = habitService.updateHabit(habitId, request);

        return ResponseEntity.ok(response);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<HabitResponseDto> updateStatusById(@PathVariable("id") Long habitId,
                                                             @Valid @RequestBody HabitStatusDto status) {
        HabitResponseDto response = habitService.updateStatus(habitId, status);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteHabit(@PathVariable("id") Long habitId) {
        habitService.deleteHabit(habitId);

        return ResponseEntity.noContent().build();
    }

}
