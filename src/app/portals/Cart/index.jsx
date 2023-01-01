import CartCardContainer from "app/components/Card/CartCard";

import classes from "./Cart.module.scss";
import { Box } from "@mui/system";
import TotalContainer from "./Total";
import { useSelector } from "react-redux";
import { getProductsInCart } from "app/store/cartApp/cartSlice";

const CartContainer = () => {
    const productsInCart = useSelector(getProductsInCart);

    return (
        <>
            <Box className={classes.container}>
                {productsInCart.map((productId) => (
                    <CartCardContainer id={productId} />
                ))}
            </Box>
            <TotalContainer />
        </>
    );
};

export default CartContainer;
