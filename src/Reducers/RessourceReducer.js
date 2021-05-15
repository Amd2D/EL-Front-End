import {SET_ITEMS,SET_MSG,SET_ALERT,SET_ITEM} from "../actions/actions"

const initial={
    items:[],
    item:[],
    msg:"",
    alert_msg:false
}

const ItemReducer=(state=initial,action)=>{
    switch(action.type){
        case SET_ITEMS:
            return{...state,items:action.payload};
        case SET_ITEM:
            return{...state,item:action.payload};
        case SET_MSG:
            return {...state,msg:action.payload};
        case SET_ALERT:
            return {...state,alert_msg:action.payload}
        default:
            return state;
    }
}

export default ItemReducer
