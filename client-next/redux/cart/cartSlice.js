import { createSlice } from '@reduxjs/toolkit'
import {DELIVERY_MODE, CARRYOUT_MODE} from '../../constants/pizza-options'
import { v4 as uuidv4 } from 'uuid';

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
    addItemToCart: (state, action) => {
        const newItem = {
            ...action.payload,
        id: uuidv4()
        };
        state.items.push(newItem)
    },
    removeItemFromCart: (state, action) => {
        const itemId = action.payload
        const index = state.items.findIndex(item => item.id = itemId);
        
        if (index > -1){
            state.items.splice(index, 1)
        }  
    },
    addCheckoutInfo: (state, action) => {
        const { name, email } = action.payload;

        state.name = name;
        state.email = email
    }
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
export const { setDeliveryMode, setCarryoutMode, addItemToCart, removeItemFromCart, addCheckoutInfo } = cartSlice.actions

export default cartSlice.reducer