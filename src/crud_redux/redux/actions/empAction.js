import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootApi } from '../../../RootApi';

// Get All Employees
export const getAllEmployees = createAsyncThunk('employee/list', async () => {
  const apiGetResponse = await RootApi.get(`/employee`);
  console.log('apiGetResponse->', apiGetResponse);
  if (apiGetResponse.status === 200) {
    return apiGetResponse.data;
  }
});
