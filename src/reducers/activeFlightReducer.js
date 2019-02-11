export default function(state=null,action){
    switch(action.type){
        case "ACTIVE_FLIGHT":
            return action.payload;
    }
    return state;
}