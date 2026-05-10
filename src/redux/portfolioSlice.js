import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "portfolio",
  initialState: {
    projects: 20,
    experience: 3,
    technologies: 20,
  },
  reducers: {},
});

export default slice.reducer;