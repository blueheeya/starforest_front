import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../../utils/cookieUtil";

const initState = {
    email: null,
    isLoading: true,
    error: null,
    data: {},
};

const loadMemberCookie = () => {
    const memberInfo = getCookie("member");
    return memberInfo;
};

export const loginPostAsync = createAsyncThunk(
    "loginPostAsync",
    async (loginParam, { rejectWithValue }) => {
        try {
            const res = await loginPost(loginParam);
            console.log(res);
            console.log("여기는 slice");
            return res;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

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
            .addCase(loginPostAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginPostAsync.fulfilled, (state, action) => {
                const { pass_word, ...restOfData } = action.payload; // `pass_word` 제외한 나머지 데이터 추출
                state.isLoading = false;
                state.email = action.payload.email;
                state.error = null;
                state.data = restOfData;
                // state.isLoading = false;
                // state.email = action.payload.email;
                // state.error = null;
                // state.data= {...action.payload}
                //
                const payload = action.payload;
                if (!payload.error) {
                    setCookie("member", JSON.stringify(payload));
                }
            })
            .addCase(loginPostAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "로그인 실패";
            });
    },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
