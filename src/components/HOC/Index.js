import React from "react";
import Header from "../UserDashbaord/Header";
import Sidebar from "../UserDashbaord/Sidebar";

const Index = (Component) => {
  return (props) => {
    return (
      <div className="d-flex">
        <Sidebar />
        <div className="w-100">
          <Header />
          <Component />
        </div>
      </div>
    );
  };
};

export default Index;
