import { useSelector } from "react-redux";
import { getProducts } from "app/store/cartApp/cartSlice";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const customStyles = {
    rows: {
        style: {},
    },
    headCells: {
        style: {
            backgroundColor: "lightgrey",
            paddingLeft: "8px", // override the cell padding for head cells
            paddingRight: "8px",
            fontWeight: 600,
        },
    },
    cells: {
        style: {
            padding: "8px",
        },
    },
};

const TableProductView = () => {
    const [columns, setColumns] = useState([]);
    const products = useSelector(getProducts);

    useEffect(() => {
        if (products.length) {
            const updatedColumns = [
                { name: "Name", selector: "name" },
                {
                    name: "Image",
                    selector: (row) => <img src={row.image} alt={row.name} />,
                },
            ];
            Object.keys(products[0].misc).forEach((columnKey) =>
                updatedColumns.push({
                    name: columnKey.split("_").join(" "),
                    selector: `misc.${columnKey}`,
                })
            );
            console.log(updatedColumns);
            setColumns(updatedColumns);
        }
    }, [products]);

    return (
        <DataTable
            columns={columns}
            data={products}
            customStyles={customStyles}
            fixedHeader
        />
    );
};

export default TableProductView;
