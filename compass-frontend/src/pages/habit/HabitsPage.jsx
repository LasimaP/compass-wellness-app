import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import Hero from "../home/components/Hero";
import Leaf from "../../components/Leaf";
import Philosophy from "../home/components/Philosophy";
import TodayBand from "./components/TodayBand";
import LeafCheck from "./components/LeafCheck";
import MiniStreak from "./components/MiniStreak";
import RowMenu from "./components/RowMenu";
import HabitRow from "./components/HabitRow";
import HabitList from "./components/HabitList";
import RestingSection from "./components/RestingSection";
import FooterComponent from "../../components/FooterComponent";

export const Frequency = {
  DAILY: "DAILY",
  SPECIFIC_DAYS: "SPECIFIC_DAYS",
};

export const DayOfWeek = {
  MONDAY: "MONDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
  THURSDAY: "THURSDAY",
  FRIDAY: "FRIDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
};

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

  return (
    <div className="max-w-[860px] mx-auto">
      <TodayBand habits={activeHabits} />
      <HabitList habits={activeHabits} onToggle={handleToggle} />
      <RestingSection habits={restingHabits} />
    </div>
  );
};

export default HabitsPage;
