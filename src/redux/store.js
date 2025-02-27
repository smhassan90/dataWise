"use client"
import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebar'

export const store = configureStore({
  reducer: {
    sideBar:sidebarReducer 
  },
})