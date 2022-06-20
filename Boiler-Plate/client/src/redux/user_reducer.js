import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user', // reducer 이름
  initialState: { info: null }, // reducer 초기값

  reducers: {
    login: (state, action) => {
      state.info = action.payload;
    },
    logout: (state) => {
      state.info = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
