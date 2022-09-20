import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    data: [],
}

export const getData = createAsyncThunk(
    'data/getData',
    async (_,{rejectWithValue,dispatch}) => {
        const result = await axios.get('https://api.chucknorris.io/jokes/random')
        dispatch(setData(result.data.value))
        
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData:(state,action) => {
            state.data = action.payload
        },
    }
})

export const { setData } = dataSlice.actions
export const selectData = (state) => state.data.data
export default dataSlice.reducer