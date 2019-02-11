export const loadData=(data)=> {
    return({
        type: "LOAD_DATA",
        payload: data
    });
};