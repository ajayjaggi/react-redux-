export default function(state=null,action){
    switch(action.type){
        case "SUBMIT_DATA":
            return action.payload;
    }
    return state;
}