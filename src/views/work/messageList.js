import React from 'react';
import { connect } from "react-redux";
import ToDate from '../../common/component/toDate';

function MessageListViews(props) {
    let { messageList, loading, loadEnd } = props;
    return (
        <div>
            <ul className="comment_list">
                {messageList.map((item,index)=>{
                    let time = item.create_time
                    return (
                        <li key={index}>
                            <div className="user_comment clearfix">
                                <span>{item.username}</span>
                            </div>
                            <div className="comment_txt">{item.content}</div>
                            <div className="comment_footer">
                                <time>
                                    <ToDate time={time} />
                                </time>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <a className="comment_list_more">
                {loadEnd ? "已经到底部了" : (loading ? "正在加载中" : "滑动加载更多")}
            </a>
        </div>
    )
}

function MessageList(props) {
    let { messageList } = props;
    return (
        <div>
            {messageList.length < 1 ? <p className="comment_list_info">快来发布你的评论吧！</p> : <MessageListViews {...props} />}
        </div>
    )
};

export default connect(state => state.messageList)(MessageList);