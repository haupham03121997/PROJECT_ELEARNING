import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./taikhoan.scss";

export default function TaiKhoan() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { credential } = useSelector((state) => state.UserReducer);

  console.log(credential);

  return (
    <div className="taikhoan">
      <div className="taikhoan__header">
        <div className="logo">
          <img src="/img/logo2.png" alt="" />
        </div>
        <div className="goback">
          <button
            onClick={() => {
              history.push("/");
            }}
            className="btn btn-outline"
          >
            <i className="fa fa-angle-double-left"></i> Về trang chủ
          </button>
        </div>
      </div>
      <div className="taikhoan__content mt-5">
        <div className="container">
          <div className="row">
            <div className="col-3 ml-auto">
              <div className="avatar">
                <img src="/img/avatar.png" alt="" />
              </div>
              <div className="name">
                <p className="my-2">
                  {" "}
                  <i className="fa fa-user mr-2"></i>
                  {credential.hoTen}
                </p>
                <p className="my-0 ">HỌC VIÊN</p>
                <p className="">===</p>
              </div>
            </div>
            <div className="col-9 taikhoan-right">
              <div className="taikhoan-right__title">
                <h3>Tài khoản</h3>
                <p>
                  Quản lý thông tin đăng nhập và thông tin cá nhân của bạn tại
                  Cybersoft.com
                </p>
              </div>
              <div className="taikhoan-right__content">
                <div className="info-login">
                  <h3>Thông tin đăng nhập</h3>
                  <hr className="mt-0 mb-0" />
                  <div className="username">
                    <div>
                      <h4>Tài Khoản</h4>
                      <p>{credential.taiKhoan}</p>
                    </div>
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </div>
                  {/* <hr /> */}

                  <div
                    onClick={() => {
                      history.push(`/caidat/taikhoan/doimatkhau/${credential.taiKhoan}`);
                    }}
                    className="password"
                  >
                    <div>
                      <h4>Mật khẩu</h4>

                      <p>*********</p>
                    </div>
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </div>
                </div>
                <div className="info-persional mt-5">
                  <h3>Thông tin cá nhân</h3>
                  <hr className="mt-0 mb-0" />
                  <div className="name-persional">
                    <div>
                      <h4>Tên người dùng</h4>
                      <p>Phạm Xuân Hậu</p>
                    </div>
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </div>
                  <div className="email-persional">
                    <div>
                      <h4>Email người dùng</h4>
                      <p>xuanhau031297@gmail.com</p>
                    </div>
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </div>
                  <div className="phone-persional">
                    <div>
                      <h4>Số điện thoại</h4>
                      <p>0371273812</p>
                    </div>
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 m-auto">
              <ul>
                <li>Giới thệu</li>
                <li>Liên hệ</li>
                <li>Bảo mật</li>
                <li>|</li>
                <li>Cybersoft.vn</li>
              </ul>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
