import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootApi } from '../../../RootApi';

// Get All Employees
export const getAllEmployees = createAsyncThunk('employee/list', async () => {
  const apiGetResponse = await RootApi.get(`/employee`);
  console.log('apiGetResponse->', apiGetResponse);
  if (apiGetResponse.status === 200) {
    return apiGetResponse.data.reverse();
  }
});

// Get Single Employee
export const getSingleEmployee = createAsyncThunk(
  'employee/view',
  async (empId) => {
    // console.log('empId-action-->', empId);
    const apiGetResponse = await RootApi.get(`/employee/${empId}`);
    // console.log('getSingleEmployee->', apiGetResponse);
    if (apiGetResponse.status === 200) {
      return apiGetResponse.data;
    }
  }
);

// Add/ Create Employee
export const addAnEmployee = createAsyncThunk(
  'employee/add',
  async (empFormData) => {
    console.log('empFormData-action-->', empFormData);
    const apiGetResponse = await RootApi.post(`/employee/`, empFormData);
    console.log('addAnEmployee->', apiGetResponse);
    if (apiGetResponse.status === 201) {
      return apiGetResponse.data;
    }
  }
);

// Delete Single Employee
export const deleteSingleEmployee = createAsyncThunk(
  'employee/delete',
  async (empDelId) => {
    console.log('empId-action-->', empDelId);
    const apiGetResponse = await RootApi.delete(`/employee/${empDelId}`);
    console.log('deleteSingleEmployee->', apiGetResponse);
    if (apiGetResponse.status === 200) {
      return apiGetResponse.data;
    }
  }
);
