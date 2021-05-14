import {SET_ITEMS,SET_MSG,SET_ALERT} from "../actions/actions"

const initial={
    items:[],
    msg:"",
    alert_msg:false
}

const ItemReducer=(state=initial,action)=>{
    switch(action.type){
        case SET_ITEMS:
            return{...state,items:action.payload};
        case SET_MSG:
            return {...state,msg:action.payload};
        case SET_ALERT:
            return {...state,alert_msg:action.payload}
        default:
            return state;
    }
}

export default ItemReducer