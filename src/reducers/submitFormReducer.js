export default function(state=null,action){
    switch(action.type){
        case "SUBMIT_FORM":
            return action.payload;
    }
    return state;
}