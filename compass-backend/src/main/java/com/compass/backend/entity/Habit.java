package com.compass.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "habits")
public class Habit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "active")
    private boolean active;

    @Column(name = "created_date")
    private LocalDate createdDate;

    @Enumerated(EnumType.STRING)
    private Frequency frequency;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "habit_days",
            joinColumns = @JoinColumn(name = "habit_id"),
            uniqueConstraints = @UniqueConstraint(columnNames = {"habit_id", "day_of_week"}))
    @Column(name = "day_of_week")
    @Enumerated(EnumType.STRING)
    @Setter(AccessLevel.NONE)
    private Set<DayOfWeek> activeDays = new HashSet<>();

    public boolean isActiveDay(DayOfWeek day) {
        return frequency == Frequency.DAILY || activeDays.contains(day);
    }

}
