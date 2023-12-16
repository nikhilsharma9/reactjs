import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AppBody from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <AppBody />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
