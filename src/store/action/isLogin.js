import HTTP from "./http";

function isLogin() {
    return function (dispatch) {
        return HTTP.post("/user/islogin").then(res => {
            if (res.data.code == 0) {
                dispatch({
                    type: "LOGIN",
                    user: res.data.username
                })
            };
        })
    }
}

export default isLogin;