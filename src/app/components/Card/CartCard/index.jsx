import { Add, Delete, Remove } from "@mui/icons-material";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
} from "@mui/material";
import {
    cartQuantityUpdate,
    deleteProductFromCart,
    getProductsInCartById,
} from "app/store/cartApp/cartSlice";
import {
    ADDTION_OPERATION,
    SUBTRACTION_OPERATION,
} from "app/store/cartApp/constants";
import { shouldProductAddToCart } from "app/utils/helpers";
import { useDispatch, useSelector } from "react-redux";

import classes from "./CartCard.module.scss";

const CartCardContainer = ({ id }) => {
    const dispatch = useDispatch();
    const productIncart = useSelector(getProductsInCartById(id));

    const {
        misc: { Price },
        name,
        quantity,
        image,
    } = productIncart;

    const handleDelete = () => {
        dispatch(deleteProductFromCart(id));
    };

    const handleUpdateQunatity = (operation) => {
        if (
            (operation === ADDTION_OPERATION && shouldProductAddToCart(id)) ||
            operation === SUBTRACTION_OPERATION
        ) {
            dispatch(cartQuantityUpdate({ id, operation }));
        }
    };

    return (
        <Card elevation={4} className={classes.container}>
            <CardMedia component="img" image={image} alt={name} />
            <CardContent className={classes.detailContainer}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <IconButton onClick={handleDelete}>
                        <Delete />
                    </IconButton>
                </Box>

                <Box className={classes.infoGrid}>
                    <Typography textOverflow="ellipsis">Price</Typography>
                    <Typography textOverflow="ellipsis">{Price}</Typography>
                </Box>

                <Box className={classes.infoGrid}>
                    <Typography>Quantity</Typography>
                    <Box className={classes.quantityCounter}>
                        <IconButton
                            onClick={() =>
                                handleUpdateQunatity(SUBTRACTION_OPERATION)
                            }
                        >
                            <Remove />
                        </IconButton>
                        <Typography>{quantity}</Typography>
                        <IconButton
                            onClick={() =>
                                handleUpdateQunatity(ADDTION_OPERATION)
                            }
                        >
                            <Add />
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CartCardContainer;
