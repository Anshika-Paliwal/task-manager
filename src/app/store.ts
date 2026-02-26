import { configureStore } from "@reduxjs/toolkit";

import { authReducer , taskReducer} from "../features/index";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
