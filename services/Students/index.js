import {apiBase, apiEndpoints} from "../../constants";
import {getToken} from "../../helpers/secureStore";
import axios from "axios";

export const getRestaurants = async() =>{
    try {
        const url = apiBase + apiEndpoints.getRestaurants;
        const accessToken = await getToken();
        const response = await axios.get(url, {
            headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        }});
        return response.data;
    }
    catch(error){
        return error.response.data.message;
    }
}

export const getMenuById = async(params) =>{
    const menuId = params.queryKey[1];
    try{
        const url =apiBase + apiEndPoints.getMenuById.replace("{menuId}", menuId);
        const accessToken = await getToken();
        const response = await axios.get(url, {headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }});
        return response.data;
    }
    catch(error){
        return error.response.data.message
    }
}

export const getMenus = async()=>{
    try{
        const url = apiBase + apiEndpoints.getMenus;
        const accessToken  = await getToken();
        const response = await axios.get(url, {
            headers: {
                "ContentType": "application/json",
                Authorization: `Bearer ${accessToken}`,
            }
        });
        return response.data
    }
    catch(error){
        return error.response.data.message;
    }
}
