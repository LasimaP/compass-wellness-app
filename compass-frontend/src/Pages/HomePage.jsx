import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FooterComponent from "../components/FooterComponent";
import FeatureBeds from "../components/FeatureBeds";
import StreakTimeline from "../components/StreakTimeline";
import Philosophy from "../components/Philosophy";

const HomePage = () => {
  return (
    <>
      <div className="bg-parchment">
        <Navbar />
        <Hero />
        <FeatureBeds />
        <StreakTimeline />
        <Philosophy />
      </div>
    </>
  );
};

export default HomePage;
