import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./menuAdmin.scss";
export default function MenuAdmin() {
  const { credential } = useSelector((state) => state.UserReducer);
  const histoty = useHistory();
  const [isActive, setIsActive] = useState(0);
  return (
    <div>
      <aside className="main-sidebar main-sidebar--custom sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a className="brand-link">
          <img
            src="/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Admin Cybersoft</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {credential.hoTen}
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column menu-active"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li
                className={(isActive ===1 ? "nav-item active" : "nav-item ")}
                onClick={() => {
                  histoty.push("/admin/courses-management");
                  setIsActive(1);
                }}
              >
                <a href="#" className="nav-link">
                  <p>Quản Lý Khóa Học</p>
                </a>
              </li>
              <li
                className={isActive ===2 ? "nav-item active" : "nav-item"}
                onClick={() => {
                  histoty.push("/admin/user-management");
                  setIsActive(2)
                }}
              >
                <a href="#" className="nav-link">
                  <p>Quản Lý Người Dùng</p>

                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
