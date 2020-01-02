import { createStore, applyMiddleware, combineReducers } from "redux"; // 创建仓库 合并中间件 合并仓库
import thunk from "redux-thunk";
import reducers from "./reducers/index";


let store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);



export default store;