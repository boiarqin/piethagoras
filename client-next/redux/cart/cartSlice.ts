import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { DELIVERY_MODE, CARRYOUT_MODE } from '../../constants/pizza-options'
import { v4 as uuidv4 } from 'uuid';
import type { Pizza, CheckoutInfo } from '../../types/pizza.types';

interface CartState {
    mode: string,
    items: Pizza[],
    name: string,
    email: string
}

const initialState: CartState = {
    mode: DELIVERY_MODE,
    items: [],
    name: '',
    email: '',
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
        addItemToCart: (state, action: PayloadAction<Pizza>) => {
            const newItem = {
                ...action.payload,
                id: uuidv4()
            };
            state.items.push(newItem)
        },
        removeItemFromCart: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const index = state.items.findIndex(item => item.id = itemId);

            if (index > -1) {
                state.items.splice(index, 1)
            }
        },
        addCheckoutInfo: (state, action: PayloadAction<CheckoutInfo>) => {
            const { name, email } = action.payload;

            state.name = name;
            state.email = email
        },
        clearCartAndCheckoutInfo: () => {
            return initialState;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setDeliveryMode, setCarryoutMode, addItemToCart, removeItemFromCart, addCheckoutInfo, clearCartAndCheckoutInfo } = cartSlice.actions

export const completeCheckout = createAsyncThunk<string, CheckoutInfo, {state: RootState}>('checkout', async (userInfo, thunkAPI) => {
    thunkAPI.dispatch(addCheckoutInfo(userInfo));
    const { cart: {items, name, email, mode} } = thunkAPI.getState();

    try {
        const { data: {orderId} } = await fetch(`http://localhost:3000/api/fake-checkout`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items, name, email, mode
                })
            })
            .then((response) => response.json())
        
            thunkAPI.dispatch(clearCartAndCheckoutInfo());

            return orderId;
    } catch (e) {
        console.error(e)
    }
}
)

export default cartSlice.reducer