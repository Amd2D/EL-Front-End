import {takeLatest, call, put,all, take} from 'redux-saga/effects'
import {setItemID,GET_ITEM,GET_ALL_ITEMS,GET_ITEMS,setItems,DELETE_ITEM,setMsg,setAlert, UPDATE_ITEM, CREATE_ITEM} from "../actions/actions"
import {getItem,getItems,getTypeItems,deleteItem, updateItem, createItem} from "../api/apiCalls"

export function* ItemWatcher(){
    yield all([
        takeLatest(GET_ALL_ITEMS,AllItemWorker),
        takeLatest(GET_ITEM,ItemWorker),
        takeLatest(GET_ITEMS,ItemsWorker),
        takeLatest(DELETE_ITEM,DeleteWorker),
        takeLatest(UPDATE_ITEM,UpdateWorker),
        takeLatest(CREATE_ITEM,CreateWorker)
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

function* ItemWorker(action){
    try{
        const res=yield call(getItem,action.payload);
        console.log(res);
        yield put(setItemID(res));
    }
    catch(error){
        console.log(error);
    }
}

function* DeleteWorker(action){
    try{
        const res=yield call(deleteItem,action.payload);
        yield put(setMsg(res.response));
        yield put(setAlert(true));
    }
    catch(error){
        console.log(error);
    }
}

function* UpdateWorker(action){
    try{
        console.log("in update worker")
        console.log(action.payload)
        const res=yield call(updateItem,action.payload);
        console.log(res);
        yield put(setMsg(res.response));
        yield put(setAlert(true));
    }
    catch(error){
        console.log(error);
    }
}

function* CreateWorker(action){
    try{
        console.log("in update worker")
        console.log(action.payload)
        const res=yield call(createItem,action.payload);
        console.log(res);
        yield put(setMsg(res.response));
        yield put(setAlert(true));
    }
    catch(error){
        console.log(error);
    }
}
