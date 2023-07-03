"use client"
import React, { FC } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: String;
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  small?: boolean;
  outline?: boolean;
  icon: IconType;
}

const Button: FC<ButtonProps> = ({
  onClick,
  label,
  disabled,
  small,
  outline,
  icon: Icon,
}) => {
  return (
    <button
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "py-1" : "py-3"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
    `}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="absolute left-9 top-3" size={18} />}
      {label}
    </button>
  );
};

export default Button;
