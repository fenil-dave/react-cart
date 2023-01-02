import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getTableFields,
    getTableGrid,
    setCompareTableFields,
} from "app/store/cartApp/cartSlice";
import queryString from "query-string";
import { createStructuredSelector } from "reselect";
import SpecInfoContainer from "./SpecInfo";
import classes from "./Compare.module.scss";

const mapContainerToState = createStructuredSelector({
    tableFields: getTableFields,
    gridCount: getTableGrid,
});

const CompareContainer = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { tableFields } = useSelector(mapContainerToState);

    useEffect(() => {
        const params = queryString.parse(location.search, {
            parseNumbers: true,
            arrayFormat: "comma",
        });
        if (params.compare_ids.length < 4) {
            dispatch(setCompareTableFields(params.compare_ids));
        } else if (params.compare_ids.length > 3) {
            const searchParam = queryString.stringify(
                {
                    compare_ids: params.compare_ids.slice(0, 3),
                },
                { arrayFormat: "comma" }
            );
            navigate({ search: searchParam });
        } else {
            navigate("/");
        }
    }, [location.search]);

    return (
        <table className={classes.compareTable} border>
            <tbody>
                {["name", "image", ...Object.keys(tableFields)].map(
                    (specKey) => (
                        <SpecInfoContainer
                            title={specKey}
                            detailKeys={tableFields[specKey]}
                        />
                    )
                )}
            </tbody>
        </table>
    );
};

export default CompareContainer;
