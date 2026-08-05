import React from "react";
import AppHeader from "./components/AppHeader";
import Hero from "../home/components/Hero";
import Leaf from "../../components/Leaf";
import Philosophy from "../home/components/Philosophy";

const HabitsPage = () => {
  return (
    <div className="bg-parchment">
      <AppHeader />
      <Hero />
      <Philosophy />
      <Leaf size="40px" state="filled" />
      <Leaf size="40px" state="hollow" />
    </div>
  );
};

export default HabitsPage;
