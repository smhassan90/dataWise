import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebar: true,
  title: 'DashBoard'
}

export const sidebarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    openSideBar: (state,action) => {
      state.sidebar = !state.sidebar
    },
    navbarTitle: (state,action) => {
        state.title = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { openSideBar,navbarTitle } = sidebarSlice.actions

export default sidebarSlice.reducer