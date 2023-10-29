import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducers";


const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;