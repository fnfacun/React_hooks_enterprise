function messageList(state = {
    messageList: [],
    loading: false, // 数据是否正在加载
    loadEnd: false, // 数据是否请求结束
    page: 1
}, action) {
    switch (action.type) {
        case "MESSAGE_LOAD":
            return {
                ...state,
                loading: true
            };
        case "MESSAGE_LOADOVER": // load 结束
            return {
                ...state,
                loading: false,
                page: ++state.page,
                messageList: state.messageList.concat(action.messageList)
            }
        case "MESSAGE_LOADEND":
            return { // 数据请求结束
                ...state,
                loadEnd: true,
            }
        case "MESSAGE_RESET":
            return {
                messageList: [],
                loading: false,
                loadEnd: false,
                page: 1
            }
    }
    return state
};

export default messageList;