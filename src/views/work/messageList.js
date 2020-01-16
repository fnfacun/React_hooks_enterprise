import React from 'react';
import { connect } from "react-redux";

function MessageList(props) {
    console.log(props);
    return (
        <ul className="comment_list">
            <li>
                <div className="user_comment clearfix">
                    <span>xuezhige</span>
                </div>
                <div className="comment_txt">作品很棒，希望自己也能做出这么好的作品</div>
                <div className="comment_footer">
                    <time>17分钟前</time>
                    <button>编辑</button>
                </div>
            </li>
        </ul>
    )
};

export default connect(state=>state.messageList)(MessageList);