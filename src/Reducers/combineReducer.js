import {combineReducers} from "redux";
import Item from "./RessourceReducer"

const allReducers =combineReducers({
    Item:Item,
})

export default allReducers;