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

  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const navigator = useNavigate();

  function saveHabit(e) {
    e.preventDefault();

    if (validateForm()) {
      const habit = { name, description, active };
      console.log(habit);

      createHabit(habit)
        .then((response) => {
          console.log(response.data);
          navigator("/habits");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "Name is required";
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Description is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function goBack() {
    navigator("/habits");
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
                  id={nameId}
                  placeholder="Enter a Habit Name"
                  name="name"
                  value={name}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                ></input>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor={descriptionId} className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  id={descriptionId}
                  placeholder="Enter Habit Description"
                  name="description"
                  value={description}
                  className={`form-control ${errors.description ? "is-invalid" : ""}`}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    if (errors.description)
                      setErrors({ ...errors, description: "" });
                  }}
                ></input>
                {errors.description && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
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
              <button
                type="button"
                className="ms-2 btn btn-danger"
                onClick={goBack}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitComponent;
