import React, { useState } from 'react';
import Header from "./header"
import Menu from "./menu";

import "../css/reset.css";
import "../css/common.css";

function Frame(props) {
    let [showMenu, setShowMenu] = useState(false);
    function changeShowMenu(){
        setShowMenu(!showMenu);
    }
    function menuHide(){
        setShowMenu(false);
    }
    return (
        <div>
            <Header 
                changeShowMenu={changeShowMenu}
            />
            <Menu />
            <div 
                id="main"
                style={{
                    transform: `translateX(${showMenu?4.5:0}rem)`
                }}
                onTouchStart={()=>{
                    menuHide();
                }}
            >
                {props.children}
            </div>
        </div>
    )
};

export default Frame;