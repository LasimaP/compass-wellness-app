import { useState } from "react";
import ListHabitComponent from "./components/ListHabitComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitComponent from "./components/HabitComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListHabitComponent />}></Route>
          <Route path="/habits" element={<ListHabitComponent />}></Route>
          <Route path="/add-habit" element={<HabitComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
