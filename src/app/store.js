import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import roleReducer from '../features/roleSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    role: roleReducer,
  },
});
