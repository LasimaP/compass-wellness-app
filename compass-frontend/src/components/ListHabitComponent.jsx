import { useEffect, useState } from "react";
import { listHabits } from "../services/HabitService";
import { useNavigate } from "react-router-dom";

const ListHabitComponent = () => {
  const [habits, setHabits] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listHabits()
      .then((response) => {
        setHabits(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewHabit() {
    navigator("/add-habit");
  }

  return (
    <div className="container">
      <h2 className="text-center">Habits</h2>
      <button className="btn btn-primary mb-2" onClick={addNewHabit}>
        Add New Habit
      </button>
      <table className="table table-striped table-border">
        <thead>
          <tr>
            <th>Habit Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Active</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <tr key={habit.id}>
              <td>{habit.id}</td>
              <td>{habit.name}</td>
              <td>{habit.description}</td>
              <td>{habit.active}</td>
              <td>{habit.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListHabitComponent;
