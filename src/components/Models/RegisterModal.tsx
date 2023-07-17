"use client";
import React, { useState, useCallback } from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/useRegisterModal";
import Model from "./Model";
import Heading from "../Heading";
import Input from "../Inputs/Input";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register")
      .then((res) => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (<div>
    <Heading title="Welcome to Airbnb" subTitle="Create an account!"/>
    <Input/>
  </div>)

  return (
    <>
      <Model
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onSubmit={handleSubmit(onSubmit)}
        onClose={registerModal.onClose}
        body={bodyContent}
      />
    </>
  );
};

export default RegisterModal;
