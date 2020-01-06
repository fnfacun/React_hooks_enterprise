import HTTP from "./http";

function outLogin() {
    return function (dispatch) {
        return HTTP.post("/user/islogin").then(res => {
            if (res.data.code == 0) {
                dispatch({
                    type: "LOGOUT",
                    user: ""
                })
            };
        })
    }
}

export default outLogin;