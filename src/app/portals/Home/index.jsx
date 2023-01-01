import { Box } from "@mui/system";
import ProductCard from "app/components/Card/ProductCard";

import classes from "./Home.module.scss";
import { useSelector } from "react-redux";
import { getProducts } from "app/store/cartApp/cartSlice";
import CompareWidget from "./CompareWidget";

const Home = () => {
    const products = useSelector(getProducts);

    return (
        <>
            <Box className={classes.container}>
                {products.map((item) => (
                    <ProductCard data={item} key={item.id} />
                ))}
            </Box>
            <CompareWidget />
        </>
    );
};

export default Home;
