import React from "react";
import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div className="page-container">
        <div className="page">
          <div className="tags-top">
            <p className="tags">&lt;html&gt;</p>
            <p className="tags tag-indent">&lt;body&gt;</p>
          </div>

          <div className="outlet">
            <Outlet />
          </div>

          <div className="tags-top">
            <p className="tags tag-indent">&lt;/body&gt;</p>
            <p className="tags ">&lt;/html&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
