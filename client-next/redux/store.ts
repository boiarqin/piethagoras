import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "./cart/cartSlice";
import { employeesApi } from "./services/employees";
import { inventoryApi } from "./services/inventory";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    [inventoryApi.reducerPath]: inventoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(employeesApi.middleware)
      .concat(inventoryApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {cart: CartState, employees: employeesState, inventory: InventoryState}
export type AppDispatch = typeof store.dispatch;
