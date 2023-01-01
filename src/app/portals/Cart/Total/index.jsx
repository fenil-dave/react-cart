import { Box, Typography } from "@mui/material";
import { getTotalCartPrice } from "app/store/cartApp/cartSlice";
import { useSelector } from "react-redux";
import classes from "./Total.module.scss";

const TotalContainer = () => {
    const totalPrice = useSelector(getTotalCartPrice);
    return (
        <Box className={classes.totalContainer}>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
                Total
            </Typography>
            <Typography>{`Rs. ${totalPrice}`}</Typography>
        </Box>
    );
};

export default TotalContainer;
