import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
 
export const getInfo = createAsyncThunk('user/getUserList', async (page, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://reqres.in/api/users?per_page=2&page=${page}`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})