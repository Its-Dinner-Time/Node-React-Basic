import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user', // reducer 이름
  initialState: { info: null }, // reducer 초기값

  reducers: {
    login: (state, action) => {
      state.info = action.payload;
    },
    logout: (state) => {
      if (logoutProccess()) state.info = null;

      async function logoutProccess() {
        const response = await axios.get('/api/user/logout');
        return response.data.success;
      }
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
