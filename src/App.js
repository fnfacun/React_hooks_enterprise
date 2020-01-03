import React from 'react';
import IndexRoute from "./router/index";
import Frame from "./common/component/frame";

function App() {
  return (
    <Frame>
      <IndexRoute />
    </Frame>
  );
}

export default App;
