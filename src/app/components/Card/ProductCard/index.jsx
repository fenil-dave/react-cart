import {
    Badge,
    Card,
    CardContent,
    CardMedia,
    Checkbox,
    FormControlLabel,
    FormGroup,
    IconButton,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import classes from "./ProductCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    getProductCountInCart,
    getIsProductBeingCompare,
    addProductCompare,
    removeProductCompare,
} from "app/store/cartApp/cartSlice";
import { createStructuredSelector } from "reselect";

const ALLOWED_FIELDS = ["Colors", "Price", "Models"];

const mapCardToState = (id) =>
    createStructuredSelector({
        productCountInCart: getProductCountInCart(id),
        isProductBeingCompare: getIsProductBeingCompare(id),
    });

const ProductCard = ({ data }) => {
    const dispatch = useDispatch();
    const { productCountInCart, isProductBeingCompare } = useSelector(
        mapCardToState(data.id)
    );
    const { misc, name } = data;

    const handleAddToCart = () => {
        dispatch(addToCart(data.id));
    };

    const handleCompareChange = (event) => {
        if (event.target.checked) {
            dispatch(addProductCompare([data.id]));
            return;
        }
        dispatch(removeProductCompare(data.id));
    };

    return (
        <Card elevation={4} className={classes.container}>
            <CardMedia component="img" image={data.image} alt={name} />
            <CardContent className={classes.detailContainer}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <IconButton onClick={handleAddToCart}>
                        <Badge
                            badgeContent={productCountInCart}
                            color="primary"
                        >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Box>
                <Box className={classes.compareCheckbox}>
                    <FormGroup>
                        <FormControlLabel
                            onChange={handleCompareChange}
                            control={<Checkbox size="small" />}
                            label="Add to compare"
                            checked={isProductBeingCompare}
                        />
                    </FormGroup>
                </Box>

                <Box className={classes.details}>
                    {Object.keys(misc)
                        .filter((item) => ALLOWED_FIELDS.includes(item))
                        .map((key) => (
                            <>
                                <Typography textOverflow="ellipsis" key={key}>
                                    {key}
                                </Typography>
                                <Typography>{misc[key]}</Typography>
                            </>
                        ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
