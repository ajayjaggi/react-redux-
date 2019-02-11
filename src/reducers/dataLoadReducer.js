export default function(state=null,action){
    switch(action.type){
        case "LOAD_DATA":
            return action.payload;
    }
    return state;
}