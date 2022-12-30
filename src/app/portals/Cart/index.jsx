import CartCardContainer from "app/components/Card/CartCard";
import Fakedata from "app/@fakedata";

import classes from "./Cart.module.scss";
import { Box } from "@mui/system";
import TotalContainer from "./Total";

const CartContainer = () => {
    const [firstData] = Fakedata.mobileData;
    return (
        <>
            <Box className={classes.container}>
                <CartCardContainer data={firstData} />
            </Box>
            <TotalContainer />
        </>
    );
};

export default CartContainer;
