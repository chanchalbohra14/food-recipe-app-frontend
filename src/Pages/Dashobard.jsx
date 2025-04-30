import React from "react";
import { useSelector } from "react-redux";

const Dashobard = () => {
  const { isSuccess, user, isError, isLoading } = useSelector(
    (state) => state.user
  );

  return (
    <div>
      <p>welcome to dashobard</p>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default Dashobard;
