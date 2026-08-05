import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FooterComponent from "../../components/FooterComponent";
import FeatureBeds from "./components/FeatureBeds";
import StreakTimeline from "./components/StreakTimeline";
import Philosophy from "./components/Philosophy";
import CtaBand from "./components/CtaBand";
import Leaf from "../../components/Leaf";

const HomePage = () => {
  return (
    <>
      <div className="bg-parchment">
        <Navbar />
        <Hero />
        <FeatureBeds />
        <StreakTimeline />
        <Philosophy />
        <CtaBand />
        <Leaf size="40px" state="filled" />
        <Leaf size="40px" state="hollow" />
      </div>
    </>
  );
};

export default HomePage;
