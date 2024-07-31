import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "../store/slice/loginSlice";

const store = configureStore({
    reducer:{
        loginSlice,
    },
})


export default store;
