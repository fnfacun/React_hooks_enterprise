import React from 'react';
import Header from "./header"
import Menu from "./menu";

import "../css/reset.css";
import "../css/common.css";

function Frame(props){
    return (
        <div>
            <Header />
            <Menu />
            <div id="main">
                {props.children}
            </div>
        </div>
    )
};

export default Frame;