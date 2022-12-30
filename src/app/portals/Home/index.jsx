import { Box } from "@mui/system";
import ProductCard from "app/components/Card/ProductCard";

import classes from "./Home.module.scss";
import data from "app/@fakedata";

const Home = () => {
    return (
        <Box className={classes.container}>
            {data.mobileData.map((item) => (
                <ProductCard data={item} key={item.id} />
            ))}
        </Box>
    );
};

export default Home;
