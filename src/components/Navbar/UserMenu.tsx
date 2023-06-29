"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";
import MenuItem from "./MenuItem";

function UserMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((val) => !val);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row gap-3 items-center">
        <div
          className="rounded-full hidden md:block 
        font-semibold hover:bg-neutral-100 
        transition cursor-pointer px-4 py-3"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggle}
          className="p-4 md:py-1 md:px-2 border-[1px]
         border-neutral-100 rounded-full 
         gap-3 cursor-pointer hover:shadow-md transition flex flex-row items-center"
        >
          <AiOutlineMenu />
          <Avatar />
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute rounded-xl shadow-md w-[40vw]
       md:w-3/4 overflow-hidden
        bg-white right-0 
        top-12 text-sm"
        >
          <MenuItem onClick={() => {}} label="Login" />
          <MenuItem onClick={() => {}} label="Sign up" />
        </div>
      )}
    </div>
  );
}

export default UserMenu;
