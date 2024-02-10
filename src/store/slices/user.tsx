import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    id: string,
    name: string,
    mobile: string,
    email: string
}

const initialState: CounterState = {
    id: '1',
    name: 'Joydeep setua',
    mobile: '9713231022',
    email: 'joydeepsetua86@gmail.com',
}

const userSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        addUser: (state, action) => {            
            state.id = action.payload.id
            state.name = action.payload.name
            state.mobile = action.payload.mobile
            state.email = action.payload.email
        },
        deleteUser: () => {
            return initialState;
        },
        
    }
});

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
