import HTTP from "./http";

function register(data) {
    return function (dispatch) {
        return HTTP.post("/user/register", data).then(res => {
            return res.data
        })
    }
}

export default register;