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

const HabitsPage = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Morning Pages",
      done: false,
      recent: [true, true, true, true, false, true, true],
      streak: 11,
      cadence: "Daily",
    },
    {
      id: 2,
      name: "Move for 20 min",
      done: false,
      recent: [true, false, true, true, true, false, true],
      streak: 4,
      cadence: "Daily",
    },
    {
      id: 3,
      name: "Read before bed",
      done: true,
      recent: [true, true, true, true, true, true, true],
      streak: 30,
      cadence: "Daily",
    },
    {
      id: 4,
      name: "No screens after 10",
      done: true,
      recent: [false, true, false, true, true, false, false],
      streak: 2,
      cadence: "Mon-Fri",
    },
  ]);

  const onToggle = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === habitId) {
          return { ...habit, done: !habit.done };
        }
        return habit;
      }),
    );
  };

  return (
    <div className="max-w-[860px] mx-auto">
      <TodayBand habits={habits} />
      <HabitRow habit={habits[1]} onToggle={() => onToggle(habits[1].id)} />
      <Hero />
      <Philosophy />
    </div>
  );
};

export default HabitsPage;
