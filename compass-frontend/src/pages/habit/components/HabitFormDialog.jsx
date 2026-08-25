import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Fieldset,
  Field,
  Label,
  Input,
  Switch,
  RadioGroup,
  Radio,
} from "@headlessui/react";
import React, { useState } from "react";
import { DayOfWeek, DayOfWeekOptions, Frequency } from "../constants/cadence";

const HabitFormDialog = ({ habit, isOpen, onClose }) => {
  const isEdit = habit !== null;
  const [frequency, setFrequency] = useState(Frequency.DAILY);
  const [activeDays, setActiveDays] = useState([]);

  const dayButtonStyle = (day) => {
    return `w-12 h-12 font-body font-semibold border border-bark/10 rounded-xl transition duration-150 hover:cursor-pointer hover:border-sage ${activeDays.includes(day) ? "bg-sage text-white" : "bg-white text-bark/80"}`;
  };

  const toggleDay = (day) => {
    if (!activeDays.includes(day)) {
      setActiveDays((prevDays) => [...prevDays, day]);
      console.log("added " + day);
    } else {
      setActiveDays((prevDays) => prevDays.filter((d) => d !== day));
      console.log("removed " + day);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-linen p-12">
          <DialogTitle>
            {isEdit ? "Edit habit" : "Plant a new habit"}
          </DialogTitle>
          <Description>
            {isEdit
              ? "Change anything except the history behind it."
              : "Small and specific beats ambitious and vague."}
          </Description>
          <div>
            <button onClick={onClose}>Cancel</button>
            <button>{isEdit ? "Save changes" : "Plant habit"}</button>
          </div>
          <Fieldset>
            <Field>
              <Label className="block uppercase">Name</Label>
              <Input className="mt-1 bg-white" name="name"></Input>
            </Field>
            <Field>
              <Label className="block uppercase">
                Description <span className="lowercase pl-6">optional</span>
              </Label>
              <Input className="mt-1 bg-white" name="description"></Input>
            </Field>
            <Field>
              <Label className="block uppercase">Cadence</Label>
              <RadioGroup
                name="frequency"
                value={frequency}
                onChange={setFrequency}
                aria-label="Cadence"
              >
                <div className="flex justify-center gap-px bg-bark/10 border border-bark/10 rounded-xl overflow-hidden cursor-pointer">
                  <Radio
                    value={Frequency.DAILY}
                    className="w-[100%] bg-linen text-center data-checked:bg-sage"
                  >
                    <p>Daily</p>
                  </Radio>
                  <Radio
                    value={Frequency.SPECIFIC_DAYS}
                    className="w-[100%] bg-linen text-center data-checked:bg-sage"
                  >
                    <p>Specific Days</p>
                  </Radio>
                </div>
              </RadioGroup>
              {frequency === Frequency.SPECIFIC_DAYS && (
                <div className="flex gap-2">
                  {DayOfWeekOptions.map((day) => (
                    <button
                      key={day.value}
                      onClick={() => toggleDay(day.value)}
                      className={dayButtonStyle(day.value)}
                      aria-pressed={activeDays.includes(day.label)}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              )}
            </Field>
          </Fieldset>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default HabitFormDialog;
