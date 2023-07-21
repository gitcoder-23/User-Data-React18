import { createSlice } from '@reduxjs/toolkit';
import { userRegister } from '../actions/loginAction';

const initialState = {
  userLoginData: {},
  isLoading: false,
  isError: false,
  isMessage: '',
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: initialState,
  reducers: {},

  extraReducers: function (builder) {
    // Add/ Create new Employee Start
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
      state.isMessage = 'Login loading';
      state.isError = false;
    });

    builder.addCase(userRegister.fulfilled, (state, action) => {
      console.log('userRegister.payload-->', action.payload);
      state.isLoading = false;
      state.userLoginData = action.payload;
      state.isError = false;
      state.isMessage = 'Register success';
    });

    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.userLoginData = {};
      state.isError = true;
      state.isMessage = 'Something went wrong!';
    });

    // Add/ Create new Employee End
  },
});

export default loginSlice.reducer;
