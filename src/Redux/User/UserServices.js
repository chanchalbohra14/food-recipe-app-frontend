import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const USER_URL = `${BASE_URL}/users`;
const userSignUp = async (userdata) => {
  try {
    const res = await axios.post(`${USER_URL}/signup`, userdata);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const userLogin = async (data) => {
  try {
    const res = await axios.post(`${USER_URL}/login`, data);
    console.log(res.data);
    const token = res.data.token;
    if (token) {
      localStorage.setItem("token", token);
    }
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
const displaytoken = localStorage.getItem("token");
console.log("displaying token", displaytoken);
const getUser = async (id) => {
  try {
    const res = await axios.get(`${USER_URL}/user/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const userServices = {
  userSignUp,
  userLogin,
  getUser,
};
export default userServices;
