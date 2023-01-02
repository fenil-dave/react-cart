import { Typography } from "@mui/material";
import WithCondition from "app/hoc/WithCondition";
import { getCompareProducts } from "app/store/cartApp/cartSlice";
import { useSelector } from "react-redux";
import classes from "./ProductDetails.module.scss";

const SpecInfoContainer = ({ title, detailKeys }) => {
    const selectedProducts = useSelector(getCompareProducts);

    const selectedProductFilteredInfo = selectedProducts.map(
        (item) => item[title]
    );

    return (
        <>
            <tr className={classes.title}>
                <th colSpan={4}>{title.split("_").join(" ")}</th>
            </tr>
            <WithCondition
                when={Array.isArray(detailKeys)}
                then={
                    detailKeys &&
                    detailKeys.map((item) => (
                        <tr>
                            <th>
                                <Typography>{item}</Typography>
                            </th>
                            {selectedProductFilteredInfo.map((product) => (
                                <td>
                                    <Typography>
                                        {product[item] || "-"}
                                    </Typography>
                                </td>
                            ))}
                        </tr>
                    ))
                }
                or={
                    <tr>
                        <th>
                            <Typography></Typography>
                        </th>
                        {selectedProducts.map((product) => (
                            <td>
                                <WithCondition
                                    when={title === "image"}
                                    then={
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    }
                                    or={
                                        <Typography>
                                            {product[title] || "-"}
                                        </Typography>
                                    }
                                />
                            </td>
                        ))}
                    </tr>
                }
            />
        </>
    );
};

export default SpecInfoContainer;
