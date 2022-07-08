import reducer from "./Reducers";
import { configureStore } from "@reduxjs/toolkit";

let store = configureStore({reducer});

export default store;