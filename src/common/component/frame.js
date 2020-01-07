import React, { useState, useRef, useEffect } from 'react';
import BScroll from "better-scroll";
import Header from "./header"
import Menu from "./menu";
import { useInnerHeight } from "../hook/index";

import "../css/reset.css";
import "../css/common.css";

function Frame(props) {
    let [showMenu, setShowMenu] = useState(false);
    let innerH = useInnerHeight();
    let wrapRef = useRef(null);
    let pageScroll = null;
    function changeShowMenu() {
        setShowMenu(!showMenu);
    }
    function menuHide() {
        setShowMenu(false);
    }
    // 滑屏处理
    useEffect(()=>{
        pageScroll = new BScroll(wrapRef.current,{
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
            }
        })
    },[])
    return (
        <div>
            <Header changeShowMenu={changeShowMenu} />
            <Menu menuHide={menuHide} />
            <div
                id="main"
                style={{
                    transform: `translateX(${showMenu ? 4.5 : 0}rem)`,
                    height: innerH
                }}
                onTouchStart={() => {
                    menuHide();
                }}
            >
                <div 
                    className="pageWrap"
                    ref={wrapRef}
                >
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Frame;