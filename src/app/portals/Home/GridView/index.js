import ProductCard from "app/components/Card/ProductCard";

import { useSelector } from "react-redux";
import { getProducts } from "app/store/cartApp/cartSlice";

const GridProductView = () => {
    const products = useSelector(getProducts);
    return (
        <>
            {products.map((item) => (
                <ProductCard data={item} key={item.id} />
            ))}
        </>
    );
};

export default GridProductView;
