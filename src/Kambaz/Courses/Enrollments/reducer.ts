import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [] as Array<{_id: string; user: string; course: string}>
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollUser: (state, action) => {
      const { userId, courseId } = action.payload;
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments.push(newEnrollment);
    },
    unenrollUser: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => 
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { setEnrollments, enrollUser, unenrollUser } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;