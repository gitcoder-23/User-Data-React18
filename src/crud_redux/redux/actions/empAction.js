import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get All Employees
export const getAllEmployees = createAsyncThunk('employee/list', async () => {
  const apiGetResponse = await axios.get(`http://localhost:3079/employee`);
  console.log('apiGetResponse->', apiGetResponse);
  return apiGetResponse.data;
});
