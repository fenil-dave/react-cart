import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";

const ProductCard = ({ data }) => {
    const { misc, name } = data;
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
                            {Object.keys(misc).map((key) => (
                                <Typography textOverflow="ellipsis" key={key}>
                                    {`${key}: ${misc[key]}`}
                                </Typography>
                            ))}
                        </Box>
                    </CardContent>
                </Box>
            </Box>
            <Box sx={{ float: "right" }}>
                <IconButton>
                    <ShoppingCart />
                </IconButton>
            </Box>
        </Card>
    );
};

export default ProductCard;
