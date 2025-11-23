import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// Login user
export const loginUser = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await api.post(`/auth/login`, data);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Logout user
export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
  try {
    const response = await api.post(`/auth/logout`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Process user register
export const processRegister = createAsyncThunk(
  "auth/processRegister",
  async (data) => {
    try {
      const response = await api.post(`/auth/process-register`, data, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Verify registered user
export const verifyRegisteredUser = createAsyncThunk(
  "user/verifyRegisteredUser",
  async (data) => {
    try {
      const response = await api.post(`/auth/verify-register`, data, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Request for recovery Forgot Password
export const forgotPasswordRequest = createAsyncThunk(
  "auth/forgotPasswordRequest",
  async (data) => {
    try {
      const response = await api.post(`/auth/forgot-password`, data, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
