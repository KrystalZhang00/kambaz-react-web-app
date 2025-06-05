import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollUser: (state, { payload }) => {
      const { userId, courseId } = payload;
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenrollUser: (state, { payload }) => {
      const { userId, courseId } = payload;
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => 
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { enrollUser, unenrollUser } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;