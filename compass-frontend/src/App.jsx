import { useState } from "react";
import ListHabitComponent from "./components/ListHabitComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitComponent from "./components/HabitComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/habits" element={<ListHabitComponent />}></Route>
          <Route path="/add-habit" element={<HabitComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
