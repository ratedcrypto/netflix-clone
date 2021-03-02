import { createSlice } from '@reduxjs/toolkit';

export const roleSlice = createSlice({
  name: 'role',
  initialState: {
    value: null,
  },
  reducers: {
    setRole: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;

// Selectors
export const selectRole = (state) => state.role.value;

export default roleSlice.reducer;
