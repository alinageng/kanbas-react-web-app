import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducers";
import assignmentsReducer from "../Assignments/assignmentsReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  }
});


export default store;