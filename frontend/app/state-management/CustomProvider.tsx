
"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor }  from "./store";

const CustomProvider = ({ children }:any) => {
  return <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    {children}
    </PersistGate>
    </Provider>;
};

export default CustomProvider;