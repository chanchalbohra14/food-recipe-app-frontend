import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUSer } from "../Redux/User/UserSlice";
const GetUSer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUSer(user._id));
  }, []);

  return <div></div>;
};

export default GetUSer;
