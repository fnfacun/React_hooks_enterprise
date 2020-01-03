import React from "react";
import LoginBox from "./login";
import "../../common/css/login.css"

function Login() {
    return (
        <div id="login_boxWrap">
            <h2 className="login_register"><span>登录&amp;注册</span></h2>
            <div className="login_register_box">
                <div className="box">
                    <LoginBox />
                </div>
            </div>
        </div>
    )
};


export default Login;