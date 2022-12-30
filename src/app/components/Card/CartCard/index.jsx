import { Add, Delete, Remove } from "@mui/icons-material";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
} from "@mui/material";

import classes from "./CartCard.module.scss";

const CartCardContainer = ({ data }) => {
    const {
        misc: { Price },
        name,
    } = data;
    return (
        <Card sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={data.image}
                    alt={name}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                            {name}
                        </Typography>
                        <Box mt={2}>
                            <Typography textOverflow="ellipsis">
                                {`Price: ${Price}`}
                            </Typography>
                        </Box>
                        <Box className={classes.quantityContainer}>
                            <Typography>Quantity</Typography>
                            <Box className={classes.quantityCounter}>
                                <IconButton>
                                    <Remove />
                                </IconButton>
                                <Typography>3</Typography>
                                <IconButton>
                                    <Add />
                                </IconButton>
                            </Box>
                        </Box>
                    </CardContent>
                </Box>
            </Box>
            <Box sx={{ float: "right" }}>
                <IconButton>
                    <Delete />
                </IconButton>
            </Box>
        </Card>
    );
};

export default CartCardContainer;
