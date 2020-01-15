<<<<<<< HEAD
import HTTP from "./http";

function getWorks(page) {
    return function (dispatch, getState) {
        dispatch({
            type: "LOAD"
        });
        let { page } = getState().works;
        return HTTP.post(`/lecturer/lists?page=${page}&rows=8`, {
            order: "desc",
            sort: "sort",
            category_id: 1,
            recommend: 1
        }).then(res => {
            if (!res.data.length) { // 当 res 没有数据时 
                dispatch({
                    type: "LOADEND"
                });
                return false;
            }
            dispatch({
                type: "LOADOVER",
                data: res.data
            });
            return true
        });
    }
}

=======
import HTTP from "./http";

function getWorks(page) {
    return function (dispatch) {
        dispatch({
            type: "LOAD"
        });
        return HTTP.post(`/lecturer/lists?page=${page}&rows=8`,{
            order: "desc",
            sort: "sort",
            category_id: 1,
            recommend: 1
        }).then(res => {
            if(!res.data.length){ // 当 res 没有数据时 
                dispatch({
                    type: "LOADEND"
                });
                return false;
            }
            dispatch({
                type: "LOADOVER",
                data: res.data
            });
            return true
        });
    }
}

>>>>>>> e8d0ca238a055d7708796568835ac8f6daf79c88
export default getWorks;