import {
    addProductCompare,
    bulkCartUpdate,
    getCartState,
    setProducts,
} from "app/store/cartApp/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fakedata from "app/@fakedata";
import {
    LOCAL_STORAGE_COMPARE_PRODUCT_IDS,
    LOCAL_STORAGE_PRODUCT_IN_CART,
} from "app/store/cartApp/constants";
import { useLocalStorage } from "app/hooks/useLocalStorage";

const BackdropContainer = () => {
    const dispatch = useDispatch();
    const [, setCartToLocal] = useLocalStorage(
        LOCAL_STORAGE_PRODUCT_IN_CART,
        {}
    );
    const productInCart = useSelector(getCartState);

    useEffect(() => {
        setCartToLocal(productInCart);
    }, [productInCart]);

    useEffect(() => {
        const productInCompare = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_COMPARE_PRODUCT_IDS) || "[]"
        );
        const productInCart = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_PRODUCT_IN_CART) || "{}"
        );
        dispatch(addProductCompare(productInCompare.slice(0, 3)));
        dispatch(bulkCartUpdate(productInCart));
        dispatch(setProducts(Fakedata.mobileData));
    }, []);
    return null;
};

export default BackdropContainer;
