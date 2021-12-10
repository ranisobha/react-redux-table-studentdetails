const initialState=[
    {
        id:0,
        name:"hema",
        address:"24/2/15-hariyana street,MP",
        mobile:"8765432678",
        email:"hema@123Gmail.com"
    },
    {
        id:1,
        name:"john",
        address:"06-01-UK street",
        mobile:"01145688688",
        email:"john@123Gmail.com"
    },
    {
        id:3,
        name:"kitty",
        address:"2/18-hyderabad street,TS",
        mobile:"9085432678",
        email:"kitty@123Gmail.com"
    },
]

const Reducer = (state=initialState,action)=>{
switch(action.type){
    case "ADD_STUDENT" :
        state=[...state,action.payload];
        return state;
        case "UPDATE_STUDENT":
            const updateState = state.map(list => list.id ===action.payload.id ? action.payload:list)
                    state=updateState;
                    return state
                    case "DELETE_STUDENT":
                        const deleteState = state.filter(list => list.id !== action.payload && list)
                        state = deleteState;
                        return state
            default :
     return state
}
}

export default Reducer;