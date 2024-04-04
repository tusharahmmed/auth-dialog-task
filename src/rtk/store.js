import {configureStore} from "@reduxjs/toolkit";
import {authModalReducer} from "./features/authModal/authModalSlice";

export const store = configureStore({
  reducer: {
    authModal: authModalReducer,
  },
  preloadedState: {},
});
