import HTTP from "./http";

function getMessageList(id) {
    return function (dispatch, getState) {
        dispatch({
            type: "MESSAGE_LOAD"
        });
        let { page } = getState().messageList;
        return HTTP.post(`/lecturer/getcomment?page=${page}&rows=10`, {
            article_id: id
        }).then(res => {
            if (!res.data.length) { // 当 res 没有数据时 
                dispatch({
                    type: "MESSAGE_LOADEND"
                });
                return false;
            }
            dispatch({
                type: "MESSAGE_LOADOVER",
                messageList: res.data
            });
            return true
        });
    }
}

export default getMessageList;