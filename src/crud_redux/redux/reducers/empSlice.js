import { createSlice } from '@reduxjs/toolkit';
import {
  addAnEmployee,
  deleteSingleEmployee,
  editAnEmployee,
  getAllEmployees,
  getSingleEmployee,
} from '../actions/empAction';

const initialState = {
  employeeList: [],
  singleEmployeeData: {},
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
      state.isMessage = 'All employee loading';
      state.isError = false;
    });

    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employeeList = action.payload;
      state.isError = false;
      state.isMessage = 'All employee displayed';
    });

    builder.addCase(getAllEmployees.rejected, (state, action) => {
      state.isLoading = false;
      state.employeeList = [];
      state.isError = true;
      state.isMessage = 'Something went wrong!';
    });

    // Get All Employees End

    // Add/ Create new Employee Start
    builder.addCase(addAnEmployee.pending, (state) => {
      state.isLoading = true;
      state.isMessage = 'Add employee loading';
      state.isError = false;
    });

    builder.addCase(addAnEmployee.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employeeList = [...state.employeeList, action.payload];
      state.isError = false;
      state.isMessage = 'New employee created';
    });

    builder.addCase(addAnEmployee.rejected, (state, action) => {
      state.isLoading = false;
      state.employeeList = [];
      state.isError = true;
      state.isMessage = 'Something went wrong!';
    });

    // Add/ Create new Employee End

    // edit/ Modify new Employee Start
    builder.addCase(editAnEmployee.pending, (state) => {
      state.isLoading = true;
      state.isMessage = 'Edit employee loading';
      state.isError = false;
    });

    builder.addCase(editAnEmployee.fulfilled, (state, action) => {
      console.log('action.payload-->', action.payload);
      state.isLoading = false;
      state.employeeList = [...state.employeeList, action.payload];
      state.isError = false;
      state.isMessage = 'Single employee modified';
    });

    builder.addCase(editAnEmployee.rejected, (state, action) => {
      state.isLoading = false;
      state.employeeList = [];
      state.isError = true;
      state.isMessage = 'Something went wrong!';
    });

    // Add/ Create new Employee End

    // Get Single Employee Start
    builder.addCase(getSingleEmployee.pending, (state) => {
      state.isLoading = true;
      state.isMessage = 'Single employee loading';
      state.isError = false;
    });

    builder.addCase(getSingleEmployee.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleEmployeeData = action.payload;
      state.isError = false;
      state.isMessage = 'Single employee displayed';
    });

    builder.addCase(getSingleEmployee.rejected, (state, action) => {
      state.isLoading = false;
      state.singleEmployeeData = {};
      state.isError = true;
      state.isMessage = 'Something went wrong!';
    });

    // Get Single Employee End

    // Delete Single Employee Start
    builder.addCase(deleteSingleEmployee.pending, (state) => {
      state.isLoading = true;
      state.isMessage = 'Single employee delete loading';
      state.isError = false;
    });

    builder.addCase(deleteSingleEmployee.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employeeList = [...state.employeeList, action.payload];
      state.isError = false;
      state.isMessage = 'Single employee deleted';
    });

    builder.addCase(deleteSingleEmployee.rejected, (state, action) => {
      state.isLoading = false;
      state.employeeList = [];
      state.isError = true;
      state.isMessage = 'Something went wrong!';
    });

    // Delete Single Employee End
  },
});

export default empSlice.reducer;
