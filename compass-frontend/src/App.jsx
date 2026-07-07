import { useState } from "react";
import "./App.css";
import ListHabitComponent from "./components/ListHabitComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitComponent from "./components/HabitComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListHabitComponent />}></Route>
          <Route path="/habits" element={<ListHabitComponent />}></Route>
          <Route path="/add-habit" element={<HabitComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
