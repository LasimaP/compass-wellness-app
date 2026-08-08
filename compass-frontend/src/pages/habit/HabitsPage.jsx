import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import Hero from "../home/components/Hero";
import Leaf from "../../components/Leaf";
import Philosophy from "../home/components/Philosophy";
import TodayBand from "./components/TodayBand";
import LeafCheck from "./components/LeafCheck";
import MiniStreak from "./components/MiniStreak";

const HabitsPage = () => {
  const habits = [
    {
      id: 1,
      name: "Morning Pages",
      done: false,
      recentStreak: [true, true, true, true, false, true, true],
    },
    {
      id: 2,
      name: "Move for 20 min",
      done: false,
      recentStreak: [true, false, true, true, true, false, true],
    },
    {
      id: 3,
      name: "Read before bed",
      done: true,
      recentStreak: [true, true, true, true, true, true, true],
    },
    {
      id: 4,
      name: "No screens after 10",
      done: true,
      recentStreak: [false, true, false, true, true, false, false],
    },
  ];

  const [done, setDone] = useState(false);

  const onToggle = () => {
    setDone(!done);
  };
  return (
    <div className="max-w-[860px] mx-auto">
      <TodayBand habits={habits} />
      <LeafCheck done={done} onToggle={onToggle} name="Brush Teeth" />
      <MiniStreak recent={habits[1].recentStreak} />
      <Hero />
      <Philosophy />
      <Leaf size={40} state="filled" />
      <Leaf size={40} state="hollow" />
    </div>
  );
};

export default HabitsPage;
