import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userLogin } from "../Redux/User/UserSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Import the CSS file for styling

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, user, isLoading } = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(userLogin(data));
    navigate(`/getuser/:${user._id}`);
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Login</h2>

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
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
