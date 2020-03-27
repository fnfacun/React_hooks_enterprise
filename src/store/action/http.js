import axios from "axios";
import qs from "qs";

const HTTP = axios.create({
    /* 请求头 */
    baseURL: "/miaov",
    /* 携带 cookis */
    withCredentials: true,
    /* 数据转换 */
    transformRequest:(data)=>{
        return qs.stringify(data)
    }
});

export default HTTP;