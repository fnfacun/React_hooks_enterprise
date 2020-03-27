import React, { useState } from 'react';
import IndexRoute from "./router/index";
import Header from "./common/component/header"
import Menu from "./common/component/menu";
import "./common/css/common.css";
import "./common/css/reset.css";

function App() {
  let [showMenu, setShowMenu] = useState( false);
  function changeShowMenu() {
    setShowMenu(!showMenu);
  }
  function menuHide() {
      setShowMenu(false);
  }
  return (
    <div>
      <Header changeShowMenu={changeShowMenu} />
      <Menu menuHide={menuHide} />
      <div 
        className="pageWrap"
        style={{
          transform: `translateX(${showMenu ? 4.5 : 0}rem)`,
        }}
        onTouchStart={menuHide}
      >
        <IndexRoute />
      </div>
    </div>
  );
}

export default App;
