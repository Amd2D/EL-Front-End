import {SET_ITEMS} from "../actions/actions"

const initial={
    items:[]
}

const ItemReducer=(state=initial,action)=>{
    switch(action.type){
        case SET_ITEMS:
            console.log("setting item")
            console.log(action.payload)
            return{...state,items:action.payload};
        default:
            return state;
    }
}

export default ItemReducer