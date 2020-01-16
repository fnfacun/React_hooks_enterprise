import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Frame from "../../common/component/frame";
import '../../common/css/miiaov.css';
import getWork from '../../store/action/work';
import Skeleton from "../../common/component/skeleton";
import Main from "./main";
import getMessageList from "../../store/action/messageList";

function Work(props) {
    let { data, loading, dispatch, match } = props;
    let { id } = match.params;
    useEffect(() => {
        dispatch(getWork(id));
        dispatch(getMessageList(id));
        return ()=>{
            dispatch({
                type: "WORK_RESET"
            });
            dispatch({
                type: "MESSAGE_RESET"
            })
        };
    },[]);
    return (
        <div>
            <Frame>
                {loading?<Skeleton />:<Main data={data} />}
            </Frame>
            <footer className="miiapv_footer">回复本帖</footer>
        </div>
    )
};


export default connect(state => ({ ...state.work }))(Work);
