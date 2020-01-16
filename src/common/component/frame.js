import React, { useRef, useEffect } from 'react';
import BScroll from "better-scroll";
import { useInnerHeight } from "../hook/index";

function Frame(props) {
    let innerH = useInnerHeight();
    let wrapRef = useRef(null);
    let { pullUp, getData } = props;
    // 滑屏处理
    useEffect(() => {
        window.pageScroll = new BScroll(wrapRef.current, {
            preventDefaultException: { // 处理连接头
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                className: /(^|\s)wrok_stop(\s|$)/
            },
            pullUpLoad: pullUp ? { threshold: 200 } : false, // 是否开始下拉功能
        });
        // 上拉请求事件
        window.pageScroll.on("pullingUp", () => {
            getData().then(res => {
                if (res) {
                    // 当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
                    window.pageScroll.finishPullUp();
                    // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
                    window.pageScroll.refresh();
                } else {
                    // 上拉数据请求完成时，关闭上拉功能
                    window.pageScroll.closePullUp();
                };
            })
        });
        return () => {
            window.pageScroll = null;
        }
    }, [])
    return (
        <div>
            <div
                id="main"
                style={{
                    height: innerH
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