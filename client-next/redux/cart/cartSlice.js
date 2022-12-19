import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DELIVERY_MODE, CARRYOUT_MODE } from '../../constants/pizza-options'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    mode: DELIVERY_MODE,
    items: [],
    name: '',
    email: '',
    recentOrderId: null
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

            if (index > -1) {
                state.items.splice(index, 1)
            }
        },
        addCheckoutInfo: (state, action) => {
            const { name, email } = action.payload;

            state.name = name;
            state.email = email
        },
        clearCartAndCheckout: (state) => {
            console.log('clear cart')
            return initialState;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setDeliveryMode, setCarryoutMode, addItemToCart, removeItemFromCart, addCheckoutInfo, clearCartAndCheckout, updateRecentOrderId } = cartSlice.actions

export const completeCheckout = createAsyncThunk('checkout', async (userInfo, thunkAPI) => {
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
        
            thunkAPI.dispatch(clearCartAndCheckout());

            return orderId;
    } catch (e) {
        console.error(e)
    }
}
)

export default cartSlice.reducer