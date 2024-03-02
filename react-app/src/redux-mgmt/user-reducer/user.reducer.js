import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserServices } from '../../services/user'

const initialList = {
    users: [],
    status: 'idle',
    error: '' 
}

export const getAllUsers = createAsyncThunk('user/getAllUsers', async ()=>{
    const users = await UserServices.getUsers()
    return users
}) 

export const deleteUser = createAsyncThunk("user/deleteUser", async (initialPost) => {
    console.log(initialPost)
    const {_id} = initialPost
    try {
        const response = await UserServices.deleteUser(_id)
        if (response?.status === 200) return initialPost;
        return `${response.status} : ${response.statusText}`;
    } catch (error) {
        return error.message
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: initialList,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.pending, (state, action)=>{
            state.status = "loading"
        })
        .addCase(getAllUsers.fulfilled, (state, action)=>{
            state.status = "succeeded"
            state.users = action.payload
            // state.users.concat(action.payload);
        })
        .addCase(getAllUsers.rejected, (state, action)=>{
            state.status = "failed"
            state.error = action.error.message
        })
        .addCase(deleteUser.fulfilled, (state, action)=>{
            if (!action?.payload.id) {
                console.log("could not delete");
                console.log(action.payload)
                return 
            }

            const { id } = action.payload;
            const OldPosts = state.posts.filter(post => post.id !== id)
            state.posts = OldPosts
        })
    }
})

export const selectAllUsers = (state) => state.users.users
export const getUsersError = (state) => state.users.error
export const getUsersStatus = (state) => state.users.status
export default userSlice.reducer