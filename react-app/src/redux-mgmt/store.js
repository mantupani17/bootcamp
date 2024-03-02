import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user-reducer/user.reducer'
import profileReducer from './profile-reducer'

export const store = configureStore({
    reducer: {
        users: userReducer,
        profile: profileReducer
    }
})