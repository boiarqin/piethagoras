import { createSlice } from '@reduxjs/toolkit'
import {DELIVERY_MODE, CARRYOUT_MODE} from '../../constants/pizza-options'

const initialState = {
    mode: DELIVERY_MODE,
  items: [],
  name: '',
  email: ''
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setDeliveryMode: (state) => {
        state.mode = DELIVERY_MODE
    },
    setCarryoutMode: (state) => {
        state.mode = CARRYOUT_MODE
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setDeliveryMode, setCarryoutMode, } = cartSlice.actions

export default cartSlice.reducer