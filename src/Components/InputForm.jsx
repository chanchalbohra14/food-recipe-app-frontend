import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userSignUp } from "../Redux/User/UserSlice";
import { toast } from "react-toastify";
import "./InputForm.css"; // Import the CSS file for styling

const InputForm = () => {
  const dispatch = useDispatch();
  const { isSuccess, isError, isLoading } = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(userSignUp(data));
    if (!isError && isSuccess) {
      toast.success("Sign up successful");
    }
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <h2>Sign Up</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register("name", { required: true })}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default InputForm;
