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
        console.log(error);     
       }
}

export const deleteItem=async(data)=>{
    try{
        const res=await api.delete(`/product/delete/${data}`);
        
        return res.data;
    } catch (error) {
        console.log(error);    
        }
}

export const updateItem=async(data)=>{
    try{
        console.log(data)
        const res=await api.put(`/product/update/${data.id}`,data);
        return res.data;
    } catch (error) {
        console.log(error);    
        }
}

export const createItem=async(data)=>{
    try{
        console.log(data)
        const res=await api.post(`/product/insert`,data);
        return res.data;
    } catch (error) {
        console.log(error);    
        }
}