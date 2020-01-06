import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useBack } from "../hook/index";
import isLogin from "../../store/action/isLogin";
import outLogin from '../../store/action/outlog';

function Header(props) {
    let { pathname } = props.location;
    let back = useBack(props.history);
    let { user } = props;
    let [isBtnShow, setBtnShow] = useState(false);
    // 记录用户信息
    useEffect(() => {
        props.dispatch(isLogin());
    }, []);
    // 用户名获取
    function getUser() {
        if (pathname === '/login') {
            return ""
        };
        if (user) {
            return (
                <span className="header-btn-right">
                    <span
                        className="header-user"
                        onClick={() => {
                            setBtnShow(!isBtnShow);
                        }}
                    >{user}</span>
                    <span
                        className="header-logout-btn"
                        style={{
                            display: isBtnShow? "block": "none"
                        }}
                        onClick={() => {
                            props.dispatch(outLogin())
                        }}
                    >退出</span>
                </span>
            )
        } else {
            return <Link className="user" to="/login"></Link>
        }
    }
    return (
        <header id="header">
            <nav className="menu">
                {pathname === "/login" ?
                    <a
                        className="header-btn-left iconfont icon-back"
                        onClick={() => {
                            back()
                        }}
                    ></a>
                    :
                    <a className="header-btn-left iconfont icon-hycaidan"></a>
                }
            </nav>
            <h1 className="logo">miaov.com</h1>
            {getUser()}
        </header>
    )
};

export default connect(state => {
    return { user: state.getUser }
})(withRouter(Header));