import { data as mobileData } from "./mobileData";
import { data as inventory } from "./inventory";
// import { data as tempData } from "./tempdata";

export const reformatData = () => {
    const tempObj = mobileData;
    console.log(
        Object.keys(mobileData).map((item, index) => ({
            ...tempObj[item],
            name: item,
            id: index + 1,
        }))
    );
};

export default { mobileData, inventory, reformatData };
