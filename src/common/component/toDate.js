import React from "react";

function ToDate(props) {
    let { time } = props;
    let nowTime = Date.now();
    let newTime = new Date(time).getTime();
    let disTime = nowTime - newTime
    if (disTime < 60000) {
        return "刚刚";
    } else if (disTime < 3600000) {
        return (disTime / 60000) + "分钟前"
    } else if (disTime < 86400000) {
        return (disTime / 3600000) + "小时前"
    } else if (disTime < 604800000){
        return (disTime / 86400000) + "天之前"
    }
    return time;
};

export default ToDate;