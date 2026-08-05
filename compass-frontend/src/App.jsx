import { MotionConfig } from "motion/react";
import ListHabitComponent from "./components/ListHabitComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitComponent from "./components/HabitComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/home/HomePage";
import HabitsPage from "./pages/habit/HabitsPage";

function App() {
  return (
    <>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/habits" element={<HabitsPage />}></Route>
            <Route path="/add-habit" element={<HabitComponent />}></Route>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </MotionConfig>
    </>
  );
}

export default App;
