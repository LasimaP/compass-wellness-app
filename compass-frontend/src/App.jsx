import { MotionConfig } from "motion/react";
import ListHabitComponent from "./components/ListHabitComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitComponent from "./components/HabitComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/home/HomePage";
import HabitsPage from "./pages/habit/HabitsPage";
import AppHeader from "./components/AppHeader";
import DashboardLayout from "./pages/DashboardLayout";

function App() {
  return (
    <>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route element={<DashboardLayout />}>
              <Route path="/habits" element={<HabitsPage />} />
              <Route path="/mood" />
              <Route path="/journal" />
              <Route path="/insight" />
            </Route>

            <Route path="/add-habit" element={<HabitComponent />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </MotionConfig>
    </>
  );
}

export default App;
