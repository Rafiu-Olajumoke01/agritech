'use client';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [], 
    couponCode: "",
    discount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItem.find((product) => product.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItem.push({ ...item, quantity: 1 });
            }
        },

        removeItemCart: (state, action) => {
            const itemId = action.payload;
            state.cartItem = state.cartItem.filter((product) => product.id !== itemId);
        },

        clearCart: (state) => {
            state.cartItem = [];
        },

        updateQuantityCart: (state, action) => {
            const { itemId, quantity } = action.payload;
            const item = state.cartItem.find((product) => product.id === itemId);
            if (item) {
                item.quantity = quantity;
            }
        },

        decrementQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItem.find((product) => product.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },

        incrementQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItem.find((product) => product.id === itemId);
            if (item) {
                item.quantity++;
            }
        },

        applyCouponCode: (state, action) => {
            const { couponCode } = action.payload;
            state.couponCode = couponCode;
        },

        removeCouponCode: (state) => {
            state.couponCode = "";
        },

        applyDiscount: (state, action) => {
            const { discount } = action.payload;
            state.discount = discount;
        },

        checkoutCart: (state) => {
            state.cartItem = [];
        },
    }
});

export default cartSlice.reducer;
export const {
    addToCart,
    removeItemCart,
    clearCart,
    updateQuantityCart,
    decrementQuantity,
    incrementQuantity,
    applyCouponCode,
    removeCouponCode,
    applyDiscount,
    checkoutCart
} = cartSlice.actions;
