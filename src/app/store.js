import { configureStore } from '@reduxjs/toolkit';
import asideReducer from 'components/Admin/Aside/asideSlide';

const rootReducer = {
  aside: asideReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
