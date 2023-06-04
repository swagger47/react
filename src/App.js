import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";







const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* footer */}
    </div >
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
root.render(<AppLayout />);
