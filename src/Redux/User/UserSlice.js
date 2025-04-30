import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "./UserServices";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isSuccess: false,
  isLogin: false,
  isError: false,
  isLoading: false,
};

export const userSignUp = createAsyncThunk(
  "user/signup",
  async (userdata, thunkAPI) => {
    try {
      return await userServices.userSignUp(userdata);
    } catch (error) {
      const message =
        (error.res && error.res.data && error.res.data.error) || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUSer = createAsyncThunk("user/user", async (id, thunkAPI) => {
  try {
    return await userServices.getUser(id);
  } catch (error) {
    const message =
      (error.res && error.res.data && error.res.data.error) || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});
export const userLogin = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      return await userServices.userLogin(data);
    } catch (error) {
      const message =
        (error.res && error.res.data && error.res.data.error) || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    RESET(state) {
      (state.isSuccess = false),
        (state.isLogin = false),
        (state.isError = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        (state.isError = false), (state.isLoading = false);
      })
      .addCase(userSignUp.fulfilled, (state) => {
        (state.isSuccess = true),
          (state.isLogin = false),
          (state.isError = false),
          (state.isLoading = false);
        toast.success("sign up successfull");
      })
      .addCase(userSignUp.rejected, (state, action) => {
        (state.isSuccess = false),
          (state.isLogin = false),
          (state.isError = true),
          (state.isLoading = false);
        toast.error(action.payload);
      })

      //userlogin
      .addCase(userLogin.pending, (state) => {
        (state.isError = false), (state.isLoading = false);
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        (state.isSuccess = true),
          (state.isLogin = true),
          (state.isError = false),
          (state.isLoading = false);
        state.user = action.payload;
        console.log("action", action.payload);
        toast.success("log in successfull");
      })
      .addCase(userLogin.rejected, (state, action) => {
        (state.isSuccess = false),
          (state.isLogin = false),
          (state.isError = true),
          (state.isLoading = false);
        toast.error(action.payload);
      });
  },
});

export default userSlice.reducer;
