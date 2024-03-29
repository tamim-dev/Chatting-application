import { createSlice } from '@reduxjs/toolkit'


export const activeChatSlice = createSlice({
  name: 'activeChat',
  initialState: {
    activeChat: localStorage.getItem("activeChat")? JSON.parse(localStorage.getItem("activeChat")):null 
  },
  reducers: {
    activeChat: (state,actions) => {
      state.activeChat = actions.payload
    }
  }
})


export const {activeChat} = activeChatSlice.actions

export default activeChatSlice.reducer