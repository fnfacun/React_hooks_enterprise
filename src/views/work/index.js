import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Frame from "../../common/component/frame";
import '../../common/css/miiaov.css';
import getWork from '../../store/action/work';
import Skeleton from "../../common/component/skeleton";
import Main from "./main";
import getMessageList from "../../store/action/messageList";
import Message from "./message";

function Work(props) {
    let { data, loading, dispatch, match, user, history } = props;
    let { id } = match.params;
    let [showMessage, setShowMessage] = useState(false);
    function getMessageData() {
        return dispatch(getMessageList(id));
    }
    useEffect(() => {
        dispatch(getWork(id));
        getMessageData()
        return () => {
            dispatch({
                type: "WORK_RESET"
            });
            dispatch({
                type: "MESSAGE_RESET"
            })
        };
    }, []);
    return (
        <div>
            <Frame
                pullUp={true}
                getData={getMessageData}
            >
                {loading ? <Skeleton /> : <Main data={data} />}
            </Frame>
            <footer
                className="miiapv_footer"
                onClick={() => {
                    if (user) {
                        setShowMessage(true)
                    } else {
                        history.push("/login")
                    }
                }}
            >回复本帖</footer>
            <Message
                showMessage={showMessage}
                setShowMessage={setShowMessage}
                id={id}
            />
        </div>
    )
};


export default connect(state => ({
    ...state.work,
    user: state.getUser
}))(Work);
