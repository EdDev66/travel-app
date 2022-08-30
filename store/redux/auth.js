import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isLoggedIn: false
    },
    reducers: {
        registerUser: async (state, action) => {
            const response = await createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
            try {
                console.log('testing')
                const user = response.user
                console.log(user)
            } catch (err) {
                console.log(err.message)
            }
        },
        loginUser: (state, action) => {
            console.log('tessst')
        },
        logoutUser: () => {}
    }
})

export const { registerUser, loginUser, logoutUser } = authSlice.actions
export default authSlice