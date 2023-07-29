import { createSlice } from "@reduxjs/toolkit";


const initialState= [ "Thai", "Math", "Science", "Social", "Toeic", "Gat", "Pat", "Enginner", "Medical", "Dance", "Song", "Car", "Cat",];

export const TitleSubjectCardStore = createSlice({
  name: "TitleSubjectCardStore",
  initialState,
  reducers: {},
});

export default TitleSubjectCardStore.reducer;
