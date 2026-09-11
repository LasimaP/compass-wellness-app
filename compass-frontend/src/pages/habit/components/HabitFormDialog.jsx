import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Fieldset,
  Field,
  Label,
  Input,
  Textarea,
  RadioGroup,
  Radio,
  DialogBackdrop,
} from "@headlessui/react";
import React, { useState } from "react";
import { DayOfWeekOptions, Frequency } from "../constants/cadence";

const HabitFormDialog = ({ habit, isOpen, onClose }) => {
  const isEdit = habit !== null;
  const [name, setName] = useState(habit ? habit.name : "");
  const [description, setDescription] = useState(
    habit ? habit.description : "",
  );
  const [frequency, setFrequency] = useState(
    habit ? habit.frequency : Frequency.DAILY,
  );
  const [activeDays, setActiveDays] = useState(habit ? habit.activeDays : []);
  const [errors, setErrors] = useState({});

  const dayButtonStyle = (day) => {
    return `w-12 h-12 font-body font-semibold border border-bark/10 rounded-xl transition duration-150 hover:cursor-pointer hover:border-sage ${activeDays.includes(day) ? "bg-sage text-white" : "bg-white text-bark/80"} focus:outline-none focus-visible:ring-2 focus-visible:ring-sage`;
  };

  const toggleDay = (day) => {
    if (!activeDays.includes(day)) {
      setActiveDays((prevDays) => [...prevDays, day]);
    } else {
      setActiveDays((prevDays) => prevDays.filter((d) => d !== day));
    }
  };

  const handleFrequencyChange = (value) => {
    setFrequency(value);
    if (value === Frequency.DAILY) {
      setActiveDays([]);
      setErrors((prev) => ({ ...prev, days: "" }));
    }
  };
  const validate = () => {
    let validationErrors = { name: "", frequency: "" };
    console.log(name);
    if (name.trim() === "") {
      validationErrors.name = "Give your habit a name.";
    }

    if (frequency === Frequency.SPECIFIC_DAYS) {
      if (activeDays.length === 0) {
        validationErrors.days = "Pick at least one day.";
      }
    }
    setErrors(validationErrors);
    return !validationErrors.name && !validationErrors.days;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const isValid = validate();
    console.log(errors);
    console.log("Data submitted...");
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/20 backdrop-blur-[2px]" />
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <DialogPanel className="w-full max-w-lg overflow-hidden border border-bark/10 rounded-2xl bg-linen">
          <div className="px-6 pt-5">
            <DialogTitle
              as="h3"
              className="font-display font-base text-2xl text-moss tracking-tighter my-0"
            >
              {isEdit ? "Edit habit" : "Plant a new habit"}
            </DialogTitle>
            <Description as="p" className="font-body text-sm text-bark">
              {isEdit
                ? "Change anything except the history behind it."
                : "Small and specific beats ambitious and vague."}
            </Description>
          </div>
          <form onSubmit={handleSubmit}>
            <Fieldset as="div" className="flex flex-col gap-4.5 px-6 py-5">
              <Field>
                <Label className="block uppercase font-mono text-xs text-bark tracking-widest">
                  Name
                </Label>
                <Input
                  className={`w-[100%] mt-2 py-2 px-2.5 bg-white border ${errors.name ? "border-clay" : "border-bark/10"} rounded-xl font-body text-bark placeholder:text-bark/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage`}
                  name="name"
                  placeholder="Morning Pages"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((prev) => ({ ...prev, name: "" }));
                  }}
                />
                {errors.name && (
                  <p className="mt-2 font-body font-semibold text-xs text-clay">
                    {errors.name}
                  </p>
                )}
              </Field>
              <Field>
                <Label className="block uppercase font-mono text-xs text-bark tracking-widest">
                  Description
                  <span className="lowercase pl-6 font-body text-xs text-bark/60 tracking-normal">
                    optional
                  </span>
                </Label>
                <Textarea
                  rows={2}
                  className="block w-[100%] resize-none mt-2 py-2 px-2.5 bg-white border border-bark/10 rounded-xl font-body text-bark placeholder:text-bark/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                  name="description"
                  placeholder="Three pages, longhand, before anything else."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Field>
              <Field as="div" className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Label className="block uppercase font-mono text-xs text-bark tracking-widest">
                    Cadence
                  </Label>
                  <RadioGroup
                    value={frequency}
                    onChange={handleFrequencyChange}
                    aria-label="Cadence"
                  >
                    <div className="flex gap-px bg-bark/10 border border-bark/10 rounded-xl overflow-hidden cursor-pointer">
                      <Radio
                        value={Frequency.DAILY}
                        className="w-[100%] bg-linen text-center py-2 font-body font-semibold text-bark transition duration-100 hover:bg-white data-checked:bg-moss data-checked:text-linen focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
                      >
                        <p>Daily</p>
                      </Radio>
                      <Radio
                        value={Frequency.SPECIFIC_DAYS}
                        className="w-[100%] bg-linen text-center py-2 font-body font-semibold text-bark transition duration-100 hover:bg-white data-checked:bg-moss data-checked:text-linen focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
                      >
                        <p>Specific Days</p>
                      </Radio>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  {frequency === Frequency.SPECIFIC_DAYS && (
                    <div className="flex gap-2">
                      {DayOfWeekOptions.map((day) => (
                        <button
                          key={day.value}
                          onClick={() => toggleDay(day.value)}
                          className={dayButtonStyle(day.value)}
                          aria-pressed={activeDays.includes(day.value)}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  )}
                  {errors.days && (
                    <p className="mt-2 font-body font-semibold text-xs text-clay">
                      {errors.days}
                    </p>
                  )}
                </div>
              </Field>
            </Fieldset>
            <div className="flex justify-end gap-2.5 border-t border-bark/12 bg-parchment/50 px-6 py-4">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-bark/10 rounded-xl font-body font-semibold text-bark transition duration-150 hover:bg-parchment cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-moss border border-moss rounded-xl font-body font-semibold text-linen transition duration-150 hover:bg-[#354031] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              >
                {isEdit ? "Save changes" : "Plant habit"}
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default HabitFormDialog;
