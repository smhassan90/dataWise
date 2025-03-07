"use client"
import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebar'
import authReducer from './auth'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    sideBar:sidebarReducer,
    auth:persistedAuthReducer
  },
})

export const persistor = persistStore(store);