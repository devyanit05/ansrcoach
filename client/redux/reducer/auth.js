import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
      cookies.set("JWT", state.user.name, { path: "/" });
    },
    logout: (state) => {
      state.user = null;
      cookies.remove("JWT");
      window.location.reload();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
