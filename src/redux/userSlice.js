import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        setUserName:(state,action) => {
            state.userName = action.payload;
        },   
    }
})

export const { setUserName } = userSlice.actions;
export const selectUser = (state) => state.userName.userName
export default userSlice.reducer