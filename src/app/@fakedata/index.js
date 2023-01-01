import { data as mobileData } from "./mobileData";
import { data as inventory } from "./inventory";
// import { data as tempData } from "./tempdata";

const getPrice = (data) => {
    if (data.includes("₹ ")) {
        return parseInt(
            data.split("/")[0].replaceAll("₹ ", "").split(",").join(""),
            10
        );
    }
    return "30000";
};

export const reformatData = () => {
    console.log(
        mobileData.map((item, index) => {
            return {
                ...item,
                misc: {
                    ...item.misc,
                    Price: getPrice(item.misc.Price),
                },
            };
        })
    );
};

export default { mobileData, inventory, reformatData };
