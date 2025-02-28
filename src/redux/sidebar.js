import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebar: true,
  title: 'DashBoard',
  width: '420px'
}

export const sidebarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    openSideBar: (state,action) => {
      state.sidebar = !state.sidebar;
      if(state.sidebar === false){
        state.width = '64px'
      }else {
        state.width = '400px';
      }
    },
    navbarTitle: (state,action) => {
        state.title = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { openSideBar,navbarTitle } = sidebarSlice.actions

export default sidebarSlice.reducer