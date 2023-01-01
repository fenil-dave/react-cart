import { createSelector, createSlice, current } from "@reduxjs/toolkit";
import { getUniqueObjKeysFromProductList } from "app/utils/helpers";
import { toast } from "react-toastify";
import { ADDTION_OPERATION } from "./constants";

const initialState = {
    products: [],
    cart: {},
    status: "idle",
    compareTableFields: {},
    compareGrid: 1,
    compareProducts: [],
};

export const cartAppSlice = createSlice({
    name: "products",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload || [];
        },
        setCompareTableFields: (state, action) => {
            const selectedProducts = current(state).products.filter((item) =>
                action.payload.includes(item.id)
            );

            const tempKeys = getUniqueObjKeysFromProductList(selectedProducts);
            const tempFields = {};

            tempKeys
                .filter((item) => !["id", "name", "image"].includes(item))
                .forEach((item) => {
                    tempFields[item] = getUniqueObjKeysFromProductList(
                        selectedProducts.map((product) => product[item] || {})
                    );
                });

            state.compareProducts = selectedProducts;
            state.compareGrid = selectedProducts.length;
            state.compareTableFields = tempFields;
        },
        addToCart: (state, action) => {
            const currentCart = current(state.cart);

            state.cart = {
                ...currentCart,
                [action.payload]: (currentCart[action.payload] || 0) + 1,
            };
        },
        bulkCartUpdate: (state, action) => {
            const currentCart = current(state.cart);
            state.cart = {
                ...currentCart,
                ...action.payload,
            };
        },
        deleteProductFromCart: (state, action) => {
            const currentCart = { ...current(state.cart) };
            delete currentCart[action.payload];
            state.cart = currentCart;
        },
        cartQuantityUpdate: (state, action) => {
            const currentCart = { ...current(state.cart) };
            const { id, operation } = action.payload;
            if (operation === ADDTION_OPERATION) {
                state.cart[id] = currentCart[id] + 1;
            } else {
                if (state.cart[id] === 1) {
                    delete currentCart[id];
                    state.cart = currentCart;
                } else {
                    state.cart[id] = currentCart[id] - 1;
                }
            }
        },
        removeProductCompare: (state, action) => {
            const currentState = { ...current(state) };
            const productsInComapre = currentState.compareProducts;
            if (
                productsInComapre
                    .map((item) => item.id)
                    .includes(action.payload)
            ) {
                state.compareProducts = productsInComapre.filter(
                    (item) => item.id !== action.payload
                );
            }
        },
        addProductCompare: (state, action) => {
            const currentState = { ...current(state) };
            const productsInComapre = currentState.compareProducts;

            if (productsInComapre.length < 3) {
                const newProduct = currentState.products.filter((item) =>
                    action.payload.includes(item.id)
                );

                if (newProduct)
                    state.compareProducts = [
                        ...currentState.compareProducts,
                        ...newProduct,
                    ];
            } else {
                toast("Only 3 items are allowed to compare at a time.");
            }
        },
        clearCompare: (state) => {
            state.compareProducts = [];
        },
    },
});

export const {
    setCompareTableFields,
    setProducts,
    addToCart,
    deleteProductFromCart,
    cartQuantityUpdate,
    removeProductCompare,
    addProductCompare,
    clearCompare,
    bulkCartUpdate,
} = cartAppSlice.actions;

export const getProducts = (state) => state.cartApp.products;

export const getTableFields = (state) => state.cartApp.compareTableFields;
export const getTableGrid = (state) => state.cartApp.compareGrid;
export const getCompareProducts = (state) => state.cartApp.compareProducts;

export const getCartState = (state) => state.cartApp.cart;

export const getCartData = createSelector(
    [getCartState, getProducts],
    (cartData, products) => {
        const productInCart = Object.keys(cartData).map((item) =>
            parseInt(item, 10)
        );
        const filteredProducts = products.filter((item) =>
            productInCart.includes(item.id)
        );

        return filteredProducts.map((item) => ({
            ...item,
            quantity: cartData[item.id],
        }));
    }
);

export const getProductsInCart = createSelector([getCartData], (cartData) =>
    cartData.map((product) => product.id)
);

export const getProductsInCartById = (id) =>
    createSelector(
        [getCartData],
        (cartData) => cartData.filter((product) => product.id === id)[0] || {}
    );

export const getProductCountInCart = (id) =>
    createSelector([getCartState], (cart) => cart[id] || 0);

export const getTotalCartPrice = createSelector([getCartData], (cartData) =>
    cartData.reduce((total, item) => total + item.quantity * item.misc.Price, 0)
);

export const getTotalCartItems = createSelector([getCartState], (cartData) =>
    Object.values(cartData).reduce((total, item) => total + item, 0)
);

export const getIsProductBeingCompare = (id) =>
    createSelector([getCompareProducts], (compareData) =>
        compareData.map((item) => item.id).includes(id)
    );

export default cartAppSlice.reducer;
