import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";


const initialState = {
  assignments: db.assignments,
  assignment: { title: "New Assignment", description: "New Assignment Description",
  dueDate: "2023-05-20", availableFrom: "2023-05-15", until: "2023-05-25"}
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setDefaultAssignment: (state, action) => {
      state.assignment = { title: "New Assignment", description: "New Assignment Description",
        dueDate: "2023-05-20", availableFrom: "2023-05-15", until: "2023-05-25"}
    },
    addAssignment: (state, action) => {
      console.log(action.payload);
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment,setDefaultAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;