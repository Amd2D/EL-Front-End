export const GET_ALL_ITEMS="GET_ALL_ITEMS"
export const GET_ITEMS="GET_ITEMS"
export const SET_ITEMS="SET_ITEMS"

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

