import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Auth = createAsyncThunk('user/auth', async () => {
  const response = await axios.get('/api/user/auth');
  return response.data;
});

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

  // async reducer
  extraReducers: (builder) => {
    builder.addCase(Auth.fulfilled, (state, action) => {});
  },
});

export const { login, logout } = userSlice.actions;
export { Auth };

export default userSlice.reducer;
