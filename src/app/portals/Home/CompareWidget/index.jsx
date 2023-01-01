import { Close } from "@mui/icons-material";
import { Typography, Box, IconButton } from "@mui/material";
import { useLocalStorage } from "app/hooks/useLocalStorage";
import { clearCompare, getCompareProducts } from "app/store/cartApp/cartSlice";
import { LOCAL_STORAGE_COMPARE_PRODUCT_IDS } from "app/store/cartApp/constants";
import queryString from "query-string";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import classes from "./CompareWidget.module.scss";

const CompareWidget = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [, setLocalStorage] = useLocalStorage(
        LOCAL_STORAGE_COMPARE_PRODUCT_IDS,
        []
    );
    const productInCompare = useSelector(getCompareProducts);

    useEffect(() => {
        setLocalStorage(productInCompare.map((item) => item.id));
    }, [productInCompare]);

    const handleClearCompare = () => {
        dispatch(clearCompare());
    };

    const handleCompareClick = () => {
        if (productInCompare.length === 1) {
            toast("Please select at least 2 items to compare.");
            return;
        }
        const params = queryString.stringify(
            { compare_ids: productInCompare.map((item) => item.id) },
            { arrayFormat: "comma" }
        );
        navigate({ pathname: "/compare", search: params });
    };

    if (productInCompare.length === 0) return null;

    return (
        <Box className={classes.container}>
            <Box className={classes.compareBtn} onClick={handleCompareClick}>
                <Typography>Compare</Typography>
                <Typography className={classes.compareCount}>
                    {productInCompare.length}
                </Typography>
            </Box>
            <IconButton
                className={classes.clearBtn}
                onClick={handleClearCompare}
            >
                <Close />
            </IconButton>
        </Box>
    );
};

export default CompareWidget;
