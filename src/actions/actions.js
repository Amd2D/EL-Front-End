export const GET_ALL_ITEMS="GET_ALL_ITEMS"
export const GET_ITEMS="GET_ITEMS"
export const SET_ITEMS="SET_ITEMS"

export const DELETE_ITEM="DELETE_ITEM"

export const SET_MSG="SET_MSG"
export const SET_ALERT ="SET_ALERT"  

export const CREATE_ITEM="CREATE_ITEM"
export const UPDATE_ITEM="UPDATE_ITEM"

export const getAllItems=()=>({
    type:GET_ALL_ITEMS
});

export const getItems=(data)=>({
    type:GET_ITEMS,
    payload:data
})

export const setItems=(data)=>({
    type:SET_ITEMS,
    payload:data
})

export const deleteItem=(data)=>({
    type:DELETE_ITEM,
    payload:data
})

export const setMsg=(data)=>({
    type:SET_MSG,
    payload:data
})

export const setAlert=(data)=>({
    type:SET_ALERT,
    payload:data
})

export const updateItem=(data)=>({
    type:UPDATE_ITEM,
    payload:data
})

export const createItem=(data)=>({
    type:CREATE_ITEM,
    payload:data
})