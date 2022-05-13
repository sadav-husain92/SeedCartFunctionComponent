import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  name: string
}

const initialState: CounterState = {
    name: '',
}

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    updateName: (state, action) => {
       state.name = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateName } = loginSlice.actions

export default loginSlice.reducer