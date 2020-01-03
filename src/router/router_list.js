import React from 'react';
// 路由组件
import Index from '../views/index/index';
import Course from "../views/course/index";
import Lecturer from "../views/lecturer/index";
import Login from "../views/login/index";
import Work from "../views/work/index";

// 路由列表
let routerList = [
    {
        name: "首页",
        path: "/",
        exact: true,
        render(props){
            return <Index {...props} />
        }
    },
    {
        name: "课程安排",
        path: "/course",
        exact: true,
        render(props){
            return <Course {...props} />
        }
    },
    {
        name: "讲师团队",
        path: "/lecturer",
        exact: true,
        render(props){
            return <Lecturer {...props} />
        }
    },
    {
        name: "登录注册",
        path: "/login",
        exact: true,
        render(props){
            return <Login {...props} />
        }
    },
    {
        name: "作品详情",
        path: "/work",
        exact: true,
        render(props){
            return <Work {...props} />
        }
    }
]

export default routerList;