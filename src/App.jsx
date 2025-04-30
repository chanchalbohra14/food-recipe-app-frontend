import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddFoodRecipe from "./Pages/AddFoodRecipe";
import EditRecipe from "./Pages/EditRecipe";
import RecipeDetails from "./Pages/RecipeDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputForm from "./Components/InputForm";
import LoginForm from "./Components/LoginForm";
import Dashobard from "./Pages/Dashobard";
import GetUSer from "./Components/GetUSer";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addrecipe" element={<AddFoodRecipe />} />
        <Route path="/editrecipe" element={<EditRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/signup" element={<InputForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashobard />} />
        <Route path="/getuser/:id" element={<GetUSer />} />
      </Routes>
    </div>
  );
};

export default App;
