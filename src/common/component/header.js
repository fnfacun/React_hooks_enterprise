import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useBack } from "../hook/index";

function getUser(pathname, user) {
    if (pathname === '/login') {
        return ""
    };
    if (user) {
        return <span className="header-btn-right header-user">{user}</span>
    } else {
        return <Link className="user" to="/login"></Link>
    }
}

function Header(props) {
    let { pathname } = props.location;
    let back = useBack(props.history);
    let { user } = props;
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
            {getUser(pathname, user)}
        </header>
    )
};

export default connect(state => {
    return { user: state.getUser }
})(withRouter(Header));