import { createAsyncThunk } from '@reduxjs/toolkit';
import UserRootApi from '../../../UserRootApi';

// Add/ Create Employee
export const userRegister = createAsyncThunk(
  'user/register',
  async (userFormData) => {
    console.log('userFormData-action-->', userFormData);
    const apiResponse = await UserRootApi.post(`/api/users`, userFormData);
    console.log('addAnEmployee->', apiResponse);
    if (apiResponse.status === 201) {
      return apiResponse.data;
    }
  }
);
