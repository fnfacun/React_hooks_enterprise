import React, { useState } from "react";
import { connect } from "react-redux";
import putMessage from "../../store/action/putMessage";

function Message(props) {
    let { showMessage, setShowMessage, id, dispatch, getUser } = props;
    let [info, setInfo] = useState("");
    let [put, setPut] = useState(false);
    return (
        <div
            className="message_wrap"
            style={{
                transform: `translateY(${showMessage ? 0 : "100%"})`
            }}
        >
            <textarea
                value={info}
                onChange={(e) => {
                    setInfo(e.target.value)
                }}
            >
            </textarea>
            {put ?
                <footer className="miiapv_footer put">留言正在发表中..</footer>
                :
                <footer
                    className="miiapv_footer"
                    onClick={() => {
                        if (!info.trim()) {
                            alert("请输入内容");
                            return;
                        }
                        dispatch(putMessage({
                            article_id: id,
                            content: info
                        })).then(() => {
                            setPut(false);
                            setShowMessage(false);
                            setInfo("");
                            dispatch({
                                type: "MESSAGE_ADD",
                                messageList: {
                                    content: info,
                                    create_time: Date.now(),
                                    username: getUser
                                }
                            })
                        })
                    }}
                >发表留言</footer>
            }
        </div>
    )
};

export default connect(state => state)(Message);