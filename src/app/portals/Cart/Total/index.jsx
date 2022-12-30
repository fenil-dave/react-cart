import { Box, Typography } from "@mui/material";
import classes from "./Total.module.scss";

const TotalContainer = () => {
    return (
        <Box className={classes.totalContainer}>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
                Total
            </Typography>
            <Typography>{`Rs. ${10000}`}</Typography>
        </Box>
    );
};

export default TotalContainer;
