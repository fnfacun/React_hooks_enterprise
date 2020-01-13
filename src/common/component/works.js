import React from 'react';
import { Link } from 'react-router-dom';
function Works(props) {
    let { data, loading, loadEnd } = props;
    return (
        <div className="works">
            <h3>学员作品</h3>
            <ul className="works_list clearfix">
                {data.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={"/work/"+item.id}>
                                <img src={item.icon} className="wrok_stop" />
                                <span className="wrork_txt clearfix wrok_stop">
                                    <strong className="wrok_stop">{item.title}</strong>
                                    <span className="wrok_stop">
                                        <em className="wrok_stop">{item.message}</em>
                                        <em className="wrok_stop">{item.good}</em>
                                    </span>
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <a className="more" href="#">
                {loadEnd ? "已经到底部了" : (loading ? "正在加载中" : "滑动加载更多")}
            </a>
        </div>
    )
};

export default Works;