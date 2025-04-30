import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header>
        <h2>Food Blog</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => isLogin && setIsOpen(true)}>
            <NavLink to={!isLogin ? "/myRecipe" : "/"}>My Recipe</NavLink>
          </li>
          <li onClick={() => isLogin && setIsOpen(true)}>
            <NavLink to={!isLogin ? "/favRecipe" : "/"}>Favourites</NavLink>
          </li>
          <li onClick={checkLogin}>
            <p className="login">
              {isLogin ? "Login" : "Logout"}
              {user?.email ? `(${user?.email})` : ""}
            </p>
          </li>
        </ul>
      </header>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default NavBar;
