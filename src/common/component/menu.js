import React from 'react';
import { NavLink } from "react-router-dom";
import { nav } from "../../router/router_list";
function Menu(props) {
    let { menuHide } = props;
    return (
        <nav id="menu">
            {nav.map((item, index) => {
                return (
                    <NavLink
                        className={item.className}
                        activeClassName={"active"}
                        to={item.path}
                        key={index}
                        exact={item.exact}
                        onTouchEnd={()=>{
                            menuHide(false);
                        }}
                    >{item.name}</NavLink>
                )
            })}
        </nav>
    )
};

export default Menu;