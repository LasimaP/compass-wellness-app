import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";

const HabitFormDialog = ({ habit, isOpen, onClose }) => {
  const isEdit = habit !== null;
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
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
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default HabitFormDialog;
