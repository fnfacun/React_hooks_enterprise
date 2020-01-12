import HTTP from "./http";

function Lecturer() {
    return function (dispatch) {
        return HTTP.post(`/lecturer/lists?page=1&rows=100`,{
            order: "desc",
            sort: "sort",
            category_id: 2
        }).then(res => {
            dispatch({
                type: "LOAD_LECTURERS",
                data: res.data
            })
        });
    }
}

export default Lecturer;