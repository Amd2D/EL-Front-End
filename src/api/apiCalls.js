import api from "./index"


//api call for all the items
export const getItems =  async () => { 
    try{
    //making the call:
    const res = await api.get(`/items/?page=0&size=30`);
    return res.data;
    }catch (error) {
        console.log(error);
    }
}

export const getTypeItems=async(data)=>{
    try{
        //making the call:
        const res = await api.get(`/items/${data}/?page=0&size=30`);
        return res.data;
    }
    catch (error) {
        console.log(error);        }
}

