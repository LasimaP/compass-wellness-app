import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HabitComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [active, setActive] = useState(false);

  const navigator = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="">
          <h2 className="">Add Habit</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">
                  Name
                  <input
                    type="text"
                    placeholder="Enter a Habit Name"
                    name="name"
                    value={name}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </label>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">
                  Description
                  <input
                    type="text"
                    placeholder="Enter Habit Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </label>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">
                  Habit Active:
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                  ></input>
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
