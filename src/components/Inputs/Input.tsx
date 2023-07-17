"use client";
import React, { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface inputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: FC<inputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className="relative w-full">
      {formatPrice && <BiDollar className="absolute top-5 left-2" />}
      <label htmlFor={id}>{label}</label>
      <input
        className=""
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
      />
    </div>
  );
};

export default Input;
