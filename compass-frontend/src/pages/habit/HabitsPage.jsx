import React from "react";
import AppHeader from "../../components/AppHeader";
import Hero from "../home/components/Hero";
import Leaf from "../../components/Leaf";
import Philosophy from "../home/components/Philosophy";
import TodayBand from "./components/TodayBand";

const HabitsPage = () => {
  const habits = [
    { id: 1, name: "Morning Pages", done: false },
    { id: 2, name: "Move for 20 min", done: false },
    { id: 3, name: "Read before bed", done: true },
    { id: 4, name: "No screens after 10", done: true },
  ];
  return (
    <div>
      <TodayBand habits={habits} />
      <Hero />
      <Philosophy />
      <Leaf size={40} state="filled" />
      <Leaf size={40} state="hollow" />
    </div>
  );
};

export default HabitsPage;
