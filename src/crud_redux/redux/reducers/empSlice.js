import { createSlice } from '@reduxjs/toolkit';
import { getAllEmployees } from '../actions/empAction';

const initialState = {
  employeeList: [],
  isLoading: false,
  isError: false,
  isMessage: '',
};

const empSlice = createSlice({
  name: 'empSlice',
  initialState: initialState,
  reducers: {},

  extraReducers: function (builder) {
    // Get All Employees Start
    builder.addCase(getAllEmployees.pending, (state) => {
      state.isLoading = true;
      state.isMessage = '';
      state.isError = false;
    });

    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employeeList = action.payload;
      state.isError = false;
      state.isMessage = '';
    });

    builder.addCase(getAllEmployees.rejected, (state, action) => {
      state.isLoading = false;
      state.employeeList = [];
      state.isError = true;
      state.isMessage = 'Something went wrong!';
    });

    // Get All Employees End
  },
});

export default empSlice.reducer;
