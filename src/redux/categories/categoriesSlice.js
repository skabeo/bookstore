import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getStatus: () => 'Under constrution',
  },
});

export const { getStatus } = categorySlice.actions;

export default categorySlice.reducer;
