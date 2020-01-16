import React from "react";
import { Switch, Route } from "react-router-dom";
import {routerList} from "./router_list"; // 路由列表组件

function IndexRoute(props) {
    return (
        <Switch>
            {routerList.map((item, index) => {
                return (
                    <Route
                        path={item.path}
                        exact={item.exact}
                        render={item.render}
                        key={index}
                    />
                )
            })}
        </Switch>
    )
};

export default IndexRoute;