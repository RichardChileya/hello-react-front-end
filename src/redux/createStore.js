import { configureStore } from '@reduxjs/toolkit';
import greetings from './greetings';

const store = configureStore({
  reducer: {
    greetings,
  },
});

export default store;
