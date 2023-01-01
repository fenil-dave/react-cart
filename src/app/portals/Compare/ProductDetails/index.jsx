import { Box, Typography } from "@mui/material";
import SpecInfoContainer from "./SpecInfo";

import classes from "./ProductDetails.module.scss";

const ProductDetails = ({ data }) => {
    const { image, name, id, ...rest } = data;
    return (
        <Box id={id} className={classes.productDetailContainer}>
            <img src={image} alt={name} />
            <Typography className={classes.title}>{name}</Typography>
            {Object.keys(rest).map((item) => (
                <SpecInfoContainer title={item} data={rest[item]} />
            ))}
        </Box>
    );
};

export default ProductDetails;
