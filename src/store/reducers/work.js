function work(state={
    data: {},
    loading: true,
},action) {
    switch (action.type) {
        case "WORK_RESET":
            return {
                data: {},
                loading: true
            };
        case "WORK_LOADOVER": // load 结束
            return {
                loading: false,
                data: action.data
            }
    }
    return state
};

export default work;