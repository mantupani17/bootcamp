import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AuthServices } from '../../services/auth'

const initialList = {
    profile: {},
    status: 'idle',
    error: '' 
}

export const fetchProfile = createAsyncThunk('profile', async ()=>{
    const profile = await AuthServices.profile()
    return profile
}) 

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialList,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProfile.pending, (state, action)=>{
            state.status = "loading"
        })
        .addCase(fetchProfile.fulfilled, (state, action)=>{
            state.status = "succeeded"
            state.profile = action.payload
        })
        .addCase(fetchProfile.rejected, (state, action)=>{
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export const selectProfile = (state) => state.profile.profile
export const getProfileError = (state) => state.profile.error
export const getProfileStatus = (state) => state.profile.status
export default profileSlice.reducer