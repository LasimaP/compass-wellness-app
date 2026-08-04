import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FooterComponent from "../../components/FooterComponent";
import FeatureBeds from "./components/FeatureBeds";
import StreakTimeline from "./components/StreakTimeline";
import Philosophy from "./components/Philosophy";
import CtaBand from "./components/CtaBand";

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
      </div>
    </>
  );
};

export default HomePage;
