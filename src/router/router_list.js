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
        render(){
            return <Index />
        }
    },
    {
        name: "课程安排",
        path: "/course",
        exact: true,
        render(){
            return <Course />
        }
    },
    {
        name: "讲师团队",
        path: "/lecturer",
        exact: true,
        render(){
            return <Lecturer />
        }
    },
    {
        name: "登录注册",
        path: "/login",
        exact: true,
        render(){
            return <Login />
        }
    },
    {
        name: "作品详情",
        path: "/work",
        exact: true,
        render(){
            return <Work />
        }
    }
]

export default routerList;