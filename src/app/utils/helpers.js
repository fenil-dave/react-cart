import { store } from "app/store";
import { toast } from "react-toastify";

export const getUniqueObjKeysFromProductList = (data) => {
    return [
        ...new Set(
            data.reduce((list, item) => [...list, ...Object.keys(item)], [])
        ),
    ];
};

export const shouldProductAddToCart = (id) => {
    const { getState } = store;
    const {
        cartApp: { cart, inventory },
    } = getState();
    const productInventory = inventory[id];

    if ((cart[id] || 0) < productInventory.max_order_units) {
        if (productInventory.quantity_available > 0) {
            return true;
        } else {
            toast("Item does not have enough stock.");
            return false;
        }
    } else {
        toast("You have reached maximum order limit for this product.");
        return false;
    }
};
