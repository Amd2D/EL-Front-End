import {takeLatest, call, put,all, take} from 'redux-saga/effects'
import {GET_ALL_ITEMS,GET_ITEMS,setItems} from "../actions/actions"
import {getItems,getTypeItems} from "../api/apiCalls"

export function* ItemWatcher(){
    yield all([
        takeLatest(GET_ALL_ITEMS,AllItemWorker),
        takeLatest(GET_ITEMS,ItemsWorker)
    ])
}  

function* AllItemWorker(action){
    try{
        const res=yield call(getItems);
        console.log(res.content);
        yield put(setItems(res.content));
    }
    catch(error){
        console.log(error);
    }
}

function* ItemsWorker(action){
    try{
        const res=yield call(getTypeItems,action.payload);
        console.log(res.content);
        yield put(setItems(res.content));
    }
    catch(error){
        console.log(error);
    }
}