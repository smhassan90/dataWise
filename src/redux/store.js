"use client"
import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebar'
import authReducer from './auth'

export const store = configureStore({
  reducer: {
    sideBar:sidebarReducer,
    auth:authReducer
  },
})