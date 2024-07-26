import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../../utils/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initState,
  reducers: {
    login: (state, action) => {
      console.log("login...");
      console.log(action.payload);
      return { email: action.payload.email };
    },
    logout: () => {
      console.log("logout...");

      removeCookie("member");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginPostAsync.fulfilled, (state, action) => {
          console.log("fullfilled");
          const payload = action.payload;
          if (!payload.error) {
            setCookie("member", JSON.stringify(payload));
          }
        })
        .addCase(loginPostAsync.pending, () => {
          console.log("pending");
        })
        .addCase(loginPostAsync.rejected, () => {
          console.log("reject");
        });
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
