import { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import { createHabit } from "../services/HabitService";

const HabitComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [active, setActive] = useState(false);

  const nameId = useId();
  const descriptionId = useId();
  const activeId = useId();

  const navigator = useNavigate();

  function saveHabit(e) {
    e.preventDefault();

    const habit = { name, description, active };
    console.log(habit);

    createHabit(habit).then((response) => {
      console.log(response.data);
      navigator("/habits");
    });
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Habit</h2>
          <div className="card-body">
            <form onSubmit={saveHabit}>
              <div className="mb-3">
                <label htmlFor={nameId} className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={nameId}
                  placeholder="Enter a Habit Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor={descriptionId} className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={descriptionId}
                  placeholder="Enter Habit Description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>
              <div className="mb-3 form-check">
                <label htmlFor={activeId} className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={activeId}
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                  ></input>
                  Habit Active
                </label>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitComponent;
