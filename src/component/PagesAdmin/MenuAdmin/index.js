import React , {useEffect}from "react";
import {useDispatch , useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
export default function MenuAdmin() {

  const {credential } = useSelector(state => state.UserReducer);
  const histoty = useHistory();
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="" className="brand-link">
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
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
             
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <p>Quản Lý Khóa Học</p>
                </a>
              </li>
              <li className="nav-item" onClick={()=>{
                histoty.push("/admin/user-management")
              }}>
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
