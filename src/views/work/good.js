import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getGood, setGood, cancelGood } from "../../store/action/getGood";

function Good(props) {
    let { goodNub, good, user, dispatch, id, history, goodid } = props;
    let startPoint = {};
    let [goodCount, setGoodCount] = useState(Number(goodNub));
    useEffect(() => {
        dispatch(getGood(id));
    }, [user]);
    return (
        <p className="miiaov_zan">
            <span>有{goodCount}人学的很赞</span>
            <span
                className={"iconfont icon-tuijian1 " + (good ? "good" : "")}
                onTouchStart={(e) => {
                    let touch = e.changedTouches[0];
                    startPoint.x = touch.pageX;
                    startPoint.y = touch.pageY;
                }}
                onTouchEnd={(e) => {
                    let touch = e.changedTouches[0];
                    let nowPoint = {
                        x: touch.pageX,
                        y: touch.pageY
                    };
                    if (Math.abs(nowPoint.x - startPoint.x) < 5
                        && Math.abs(nowPoint.y - startPoint.y) < 5) {
                        if (user) {
                            if (good) {
                                dispatch(cancelGood({
                                    id,
                                    goodid
                                })).then(res => {
                                    if(res){
                                        setGoodCount(goodCount - 1)
                                    }
                                })
                            } else {
                                dispatch(setGood(id)).then(res => {
                                    if(res){
                                        setGoodCount(goodCount + 1)
                                    }
                                })
                            }
                        } else {
                            history.push("/login");
                        }
                    }
                }}
            ></span>
        </p>
    );
}
export default withRouter(connect(state => ({
    ...state.good,
    user: state.getUser
}))(Good));