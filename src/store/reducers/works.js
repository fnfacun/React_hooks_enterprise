<<<<<<< HEAD
function works(state={
    data: [],
    loading: false, // 数据是否正在加载
    loadEnd: false, // 数据是否请求结束
    page: 1
},action) {
    switch (action.type) {
        case "LOAD":
            return {
                ...state,
                loading: true
            };
        case "LOADOVER": // load 结束
            return {
                ...state,
                loading: false,
                page: ++state.page,
                data: state.data.concat(action.data)
            }
        case "LOADEND":
            return { // 数据请求结束
                ...state,
                loadEnd: true,
            }
    }
    return state
};

=======
function works(state={
    data: [],
    loading: false, // 数据是否正在加载
    loadEnd: false  // 数据是否请求结束
},action) {
    switch (action.type) {
        case "LOAD":
            return {
                ...state,
                loading: true
            };
        case "LOADOVER": // load 结束
            return {
                ...state,
                loading: false,
                data: state.data.concat(action.data)
            }
        case "LOADEND":
            return { // 数据请求结束
                ...state,
                loadEnd: true,
            }
    }
    return state
};

>>>>>>> e8d0ca238a055d7708796568835ac8f6daf79c88
export default works;