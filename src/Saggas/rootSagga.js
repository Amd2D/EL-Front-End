import {ItemWatcher} from "./ItemSaggas"
import { call, all } from "redux-saga/effects";

export function* rootSaga(){
    yield all([
        call(ItemWatcher),
    ])
}