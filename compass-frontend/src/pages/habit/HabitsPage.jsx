import React, { use, useState } from "react";
import TodayBand from "./components/TodayBand";
import HabitList from "./components/HabitList";
import RestingSection from "./components/RestingSection";
import { DayOfWeek, Frequency } from "./constants/cadence";
import HabitFormDialog from "./components/HabitFormDialog";

const HabitsPage = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Morning Pages",
      done: false,
      recent: [true, true, true, true, false, true, true],
      streak: 11,
      cadence: "Daily",
      frequency: Frequency.DAILY,
      activeDays: [],
    },
    {
      id: 2,
      name: "Move for 20 min",
      done: false,
      recent: [true, false, true, true, true, false, true],
      streak: 4,
      cadence: "Daily",
      frequency: Frequency.DAILY,
      activeDays: [],
    },
    {
      id: 3,
      name: "Read before bed",
      done: true,
      recent: [true, true, true, true, true, true, true],
      streak: 30,
      cadence: "Daily",
      frequency: Frequency.DAILY,
      activeDays: [],
    },
    {
      id: 4,
      name: "No screens after 10",
      done: true,
      recent: [false, true, false, true, true, false, false],
      streak: 2,
      cadence: "Mon-Fri",
      frequency: Frequency.SPECIFIC_DAYS,
      activeDays: [
        DayOfWeek.MONDAY,
        DayOfWeek.TUESDAY,
        DayOfWeek.WEDNESDAY,
        DayOfWeek.THURSDAY,
        DayOfWeek.FRIDAY,
      ],
    },

    {
      id: 5,
      name: "Long Run",
      done: false,
      recent: [true, true, true, false, true, false, false],
      streak: 3,
      cadence: "Saturdays",
      frequency: Frequency.SPECIFIC_DAYS,
      activeDays: [DayOfWeek.SATURDAY],
    },
    {
      id: 6,
      name: "Call Mom",
      done: false,
      recent: [true, true, true, false, true, false, false],
      streak: 3,
      cadence: "Sundays",
      frequency: Frequency.SPECIFIC_DAYS,
      activeDays: [DayOfWeek.SUNDAY],
    },
    {
      id: 7,
      name: "Bike Ride",
      done: false,
      recent: [true, true, true, false, true, false, false],
      streak: 3,
      cadence: "Sundays",
      frequency: Frequency.SPECIFIC_DAYS,
      activeDays: [DayOfWeek.SUNDAY],
    },
  ]);

  const [editingHabit, setEditingHabit] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const isActiveToday = (habit) => {
    if (habit.frequency === Frequency.DAILY) return true;
    const today = new Date()
      .toLocaleDateString("en-US", { weekday: "long" })
      .toUpperCase();

    return habit.activeDays.includes(today);
  };

  const activeHabits = habits.filter((habit) => isActiveToday(habit));

  const restingHabits = habits.filter((habit) => !isActiveToday(habit));

  const handleToggle = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === habitId) {
          // console.log(habit.id + " toggled");
          return { ...habit, done: !habit.done };
        }
        return habit;
      }),
    );
  };

  const handleEdit = (habitId) => {
    setEditingHabit(habits.find((habit) => habit.id === habitId));
    setDialogOpen(true);
  };

  const handleArchive = (habitId) => {
    console.log(`habit ${habitId} archived...`);
  };

  const handleDelete = (habitId) => {
    console.log(`habit ${habitId} deleted...`);
  };

  const handleAdd = () => {
    setEditingHabit(null);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    console.log(isDialogOpen);
  };

  return (
    <div className="max-w-[908px] mx-auto px-6">
      <TodayBand habits={activeHabits} />
      <HabitList
        habits={activeHabits}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onArchive={handleArchive}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
      <RestingSection habits={restingHabits} />
      <HabitFormDialog
        habit={editingHabit}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default HabitsPage;
