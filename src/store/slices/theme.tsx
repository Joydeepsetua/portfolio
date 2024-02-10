import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    themeName:String
}

const initialState: CounterState = {
    themeName : 'default'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {            
            state.themeName = action.payload
        },
    }
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
