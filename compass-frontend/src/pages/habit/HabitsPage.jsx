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

const HabitsPage = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Morning Pages",
      done: false,
      recent: [true, true, true, true, false, true, true],
      streak: 11,
      cadence: "Daily",
      activeToday: true,
    },
    {
      id: 2,
      name: "Move for 20 min",
      done: false,
      recent: [true, false, true, true, true, false, true],
      streak: 4,
      cadence: "Daily",
      activeToday: true,
    },
    {
      id: 3,
      name: "Read before bed",
      done: true,
      recent: [true, true, true, true, true, true, true],
      streak: 30,
      cadence: "Daily",
      activeToday: true,
    },
    {
      id: 4,
      name: "No screens after 10",
      done: true,
      recent: [false, true, false, true, true, false, false],
      streak: 2,
      cadence: "Mon-Fri",
      activeToday: true,
    },

    {
      id: 5,
      name: "Long Run",
      done: false,
      recent: [true, true, true, false, true, false, false],
      streak: 3,
      cadence: "Saturdays",
      activeToday: false,
    },
    {
      id: 6,
      name: "Call Mom",
      done: false,
      recent: [true, true, true, false, true, false, false],
      streak: 3,
      cadence: "Sundays",
      activeToday: false,
    },
    {
      id: 7,
      name: "Bike Ride",
      done: false,
      recent: [true, true, true, false, true, false, false],
      streak: 3,
      cadence: "Sundays",
      activeToday: false,
    },
  ]);

  const activeHabits = habits.filter((habit) => habit.activeToday);

  const restingHabits = habits.filter((habit) => !habit.activeToday);

  const onToggle = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === habitId) {
          console.log(habit.id + " toggled");
          return { ...habit, done: !habit.done };
        }
        return habit;
      }),
    );
  };

  return (
    <div className="max-w-[860px] mx-auto">
      <TodayBand habits={activeHabits} />
      <HabitList habits={activeHabits} onToggle={onToggle} />
      <RestingSection habits={restingHabits} />
    </div>
  );
};

export default HabitsPage;
