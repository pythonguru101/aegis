import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import rootReducer from './rootreducer';
const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel1,
    blacklist: [
      
    ],
    // Add any other configuration options you need
  };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
  });
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  
  export const persistor = persistStore(store);
  
  export default store;