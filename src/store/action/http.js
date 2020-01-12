import axios from "axios";
import qs from "qs"

const HTTP = axios.create({
    baseURL: "/miaov",  // 请求头
    withCredentials: true,
    transformRequest:(data)=>{
        return qs.stringify(data)
    }
});

export default HTTP;