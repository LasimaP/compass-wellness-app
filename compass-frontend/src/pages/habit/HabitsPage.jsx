import React from "react";
import AppHeader from "../../components/AppHeader";
import Hero from "../home/components/Hero";
import Leaf from "../../components/Leaf";
import Philosophy from "../home/components/Philosophy";
import TodayBand from "./components/TodayBand";

const HabitsPage = () => {
  const habits = [
    { name: "Morning Pages", done: false },
    { name: "Move for 20 min", done: false },
    { name: "Read before bed", done: true },
    { name: "No screens after 10", done: true },
  ];
  return (
    <div>
      <TodayBand habits={habits} />
      <Hero />
      <Philosophy />
      <Leaf size="40px" state="filled" />
      <Leaf size="40px" state="hollow" />
    </div>
  );
};

export default HabitsPage;
