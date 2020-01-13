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
    let { pullUp, getWorkData } = props;
    function changeShowMenu() {
        setShowMenu(!showMenu);
    }
    function menuHide() {
        setShowMenu(false);
    }
    // 滑屏处理
    useEffect(() => {
        let pageScroll = new BScroll(wrapRef.current, {
            preventDefaultException: { // 处理连接头
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                className: /(^|\s)wrok_stop(\s|$)/
            },
            pullUpLoad: pullUp ? { threshold: 200 } : false, // 是否开始下拉功能
        });
        // 上拉请求事件
        pageScroll.on("pullingUp", () => {
            getWorkData().then(res => {
                if (res) {
                    // 当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
                    pageScroll.finishPullUp();
                    // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
                    pageScroll.refresh();
                } else {
                    // 上拉数据请求完成时，关闭上拉功能
                    pageScroll.closePullUp();
                };
            })
        });
    }, [])
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