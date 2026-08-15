import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const RowMenu = ({ onEdit, onArchive, onDelete }) => {
  return (
    <Menu>
      <MenuButton className="flex h-[30px] w-[30px] items-center justify-center rounded-lg font-body text-bark/80 hover:bg-bark/[0.07] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-moss">
        ⋯
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="relative z-50 min-w-[150px] bg-linen border border-bark/15 rounded-xl p-1 shadow-[0_6px_20px_rgba(58,49,41,0.13)] transition duration-100 ease-out focus:outline-none"
      >
        <MenuItem>
          <button
            onClick={onEdit}
            className="w-full rounded-lg px-3 py-2 font-body text-left text-sm text-bark transition-colors data-[focus]:bg-sage/30 cursor-pointer"
          >
            Edit habit
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={onArchive}
            className="w-full rounded-lg px-3 py-2 font-body text-left text-sm text-bark transition-colors data-[focus]:bg-sage/30 cursor-pointer"
          >
            Archive
          </button>
        </MenuItem>
        <div className="mx-2 my-1 h-px bg-bark/15" />
        <MenuItem>
          <button
            onClick={onDelete}
            className="w-full rounded-lg px-3 py-2 text-left text-xs text-bark/70 transition-colors data-[focus]:bg-clay/30 data-[focus]:text-clay cursor-pointer"
          >
            Delete
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default RowMenu;
