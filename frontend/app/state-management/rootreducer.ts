'use client'

import { AnyAction, Reducer, combineReducers } from "@reduxjs/toolkit";
// ... import other components you need
import storage from "redux-persist/lib/storage";
import counterSlice from "./features/counter/counterSlice";

const appReducer = combineReducers({
  counter: counterSlice,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "clear/clearResults") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:root");

    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
