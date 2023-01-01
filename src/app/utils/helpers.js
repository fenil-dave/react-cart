export const getUniqueObjKeysFromProductList = (data) => {
    return [
        ...new Set(
            data.reduce((list, item) => [...list, ...Object.keys(item)], [])
        ),
    ];
};
