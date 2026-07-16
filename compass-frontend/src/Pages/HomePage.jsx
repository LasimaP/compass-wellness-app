import React from "react";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div className="flex gap-2">
      <Button variant="primary" href="#">
        Plant your first habit
      </Button>
      <Button variant="ghost">Click here</Button>
    </div>
  );
};

export default HomePage;
