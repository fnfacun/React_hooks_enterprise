import React, { useState } from 'react';
import { connect } from "react-redux";
import register from "../../store/action/register";
import { withRouter } from "react-router-dom";

function RegisterBox(props) {
    let [user, setUser] = useState(""); // 用户名
    let [password, setPassword] = useState(""); // 密码
    let [password2, setPassword2] = useState(""); // 密码
    let [vcode, setVcode] = useState("");   // 验证码
    let [vcodeShow, setVcodeShow] = useState(false);    // 是否显示验证码
    let [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?" + Date.now()); // 图片请求
    let { setDeg } = props;
    function toRegister() {
        props.dispatch(register({
            verify: vcode,
            username: user,
            password,
            repassword: password2
        })).then(data => {
            alert(data.msg);
            setTimeout(() => {
                if (data.code === 0) {
                    setDeg(0)
                };
                setVcodeSrc("/miaov/user/verify?" + Date.now())
            }, 100);
        })
    }
    return (
        <div className="register_box">
            <h3>注册账号</h3>
            <div className="register_form">
                <p>
                    <input
                        type="text"
                        placeholder="用户名"
                        value={user}
                        onChange={e => {
                            setUser(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="请确认密码"
                        value={password2}
                        onChange={e => {
                            setPassword2(e.target.value);
                        }}
                    />
                </p>
                <p className="clearfix">
                    <input
                        className="verifyCode"
                        type="text"
                        placeholder="验证码"
                        value={vcode}
                        onChange={e => {
                            setVcode(e.target.value);
                        }}
                        onFocus={() => {
                            setVcodeShow(true);
                        }}
                    />
                    {vcodeShow ?
                        <img
                            className="verify"
                            src={vcodeSrc}
                            onClick={() => {
                                setVcodeSrc("/miaov/user/verify?" + Date.now())
                            }}
                        />
                        : 
                    ""}
                </p>
                <button
                    className="form_btn"
                    onClick={toRegister}
                >注册</button>
                <p className="form_tip">已经帐号？
                    <a onTouchStart={() => {
                        setDeg(0);
                    }}>立即登录</a>
                </p>
            </div>
        </div>
    )
};

// 注入 dispatch 到 props And withRouter 
export default connect(res => res)(withRouter(RegisterBox));