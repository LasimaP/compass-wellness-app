import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FooterComponent from "../components/FooterComponent";
import FeatureBeds from "../components/FeatureBeds";
import StreakTimeline from "../components/StreakTimeline";

const HomePage = () => {
  return (
    <>
      <div className="bg-parchment">
        <Navbar />
        <Hero />
        <FeatureBeds />
        <StreakTimeline />
      </div>
    </>
  );
};

export default HomePage;
