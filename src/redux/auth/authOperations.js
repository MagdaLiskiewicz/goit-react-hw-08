import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", credentials);

      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      toast.error("Email already registered.");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("/users/login", credentials);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      toast.error("Invalid email or password.");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("/users/logout", credentials);

      clearAuthHeader();
      toast.success("You have been logged out successfully.");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const persistedToken = thunkApi.getState().auth.token;

    if (!persistedToken) {
      return thunkApi.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
