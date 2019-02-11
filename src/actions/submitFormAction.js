export const submitFormAction =(data)=> {
    //console.log("hi");
    //e.preventDefault();
    return({
        type: "SUBMIT_DATA",
        payload: data
    });
};