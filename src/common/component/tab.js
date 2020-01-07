import React, { useState, useEffect, useRef } from "react";
import BScroll from 'better-scroll';
import "../css/index.css";

function Tab(props) {
    let { data, render } = props;
    let bScroll = null;
    let bannerWrap = useRef(null);
    let [now, setNow] = useState(0);
    useEffect(() => {
        let timer = null;
        bScroll = new BScroll(bannerWrap.current, {
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical",
            momentum: false,  // 单张切换
            snap: {
                loop: true  // 无缝滚动
            }
        });
        // 同步 active
        bScroll.on("scrollEnd",()=>{
            console.log("1")
            setNow(bScroll.getCurrentPage().pageX)
        });
        // 开启定时器
        timer = setInterval(() => {
            bScroll.next(600)
        }, 3000);
        // 按下清除
        bannerWrap.current.addEventListener("touchstart",()=>{
            clearInterval(timer);
        });
        // 抬起执行
        bannerWrap.current.addEventListener("touchend",()=>{
            timer = setInterval(() => {
                bScroll.next(600)
            }, 3000);
        });
        return ()=>{
            clearInterval(timer);
        }
    }, []);
    return (
        <div className="banner">
            <div className="banner_img" ref={bannerWrap}>
                <ul className="banner_list clearfix">
                    {
                        data.map((item, index) => <li key={index}>{render(item)}</li>)
                    }
                </ul>
            </div>
            <ul className="banner_nav">
                {
                    data.map((item, index) => <li key={index} className={now==index?"active":""} ></li>)
                }
            </ul>
        </div>
    )
};

export default Tab;