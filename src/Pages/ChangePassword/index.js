import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import swal from "sweetalert";
import { DoiMatKhauAction } from "../../Action/doiMatKhauAction";
import { timKiemNguoiDungAction } from "../../Action/timKiemNguoiDungAction";
import "./changepassword.scss";

export default function DoimatKhau(props) {
  const { match } = props;
  const user = JSON.parse(localStorage.getItem("userLogin"));
  const history = useHistory();
  const dispatch = useDispatch();
  const [matKhauCu, setMatKhauCu] = useState("");
  const [matKhauMoi, setMatKhauMoi] = useState("");
  const [nhapMatKhauMoi, setNhapMatKhauMoi] = useState("");
  const [isShowPass, setIsShowPass] = useState(false);
  const [isCheckPass, setIsCheckPass] = useState("");
  const [isComparePass, setsComparePass] = useState("");
  const [isCheckPassOld, setIsCheckPassOld] = useState("");
  const [isCheckPassNew, setIsCheckPassNew] = useState("");
  const [isCheckPassEmpty, setIsCheckPassEmpty] = useState("");
  const [isCheckPassOldEmpty, setIsCheckPassOldEmpty] = useState("");
  const [isCheckPassNewEmpty, setIsCheckPassNewEmpty] = useState("");

  const taiKhoan = match.params.taiKhoan;
  const hoTen = user.hoTen;
  const email = user.email;
  const soDT = user.soDT;
  const maLoaiNguoiDung = user.maLoaiNguoiDung;
  const maNhom = user.maNhom;
  const [values, setValues] = useState({
    taiKhoan: taiKhoan,
    matKhau: "",
    hoTen: hoTen,
    soDT: soDT,
    maLoaiNguoiDung: maLoaiNguoiDung,
    maNhom: maNhom,
    email: email,
  });
  useEffect(() => {
    dispatch(timKiemNguoiDungAction(match.params.taiKhoan));
  }, []);

  const { timKiemNguoiDung } = useSelector(
    (state) => state.TimKiemNguoiDungReDucer
  );

  if (timKiemNguoiDung.length) {
    var mk = timKiemNguoiDung[0].matKhau;
  }

  // Viết hàm validate

  const handleMatKhauCu = (e) => {
    const value = e.target.value;
    setMatKhauCu(value);
    if (!value) {
      setIsCheckPassOldEmpty("Vui lòng nhập mật khẩu!");
    } else {
      setIsCheckPassOldEmpty("");
    }
    if (value !== mk) {
      setIsCheckPassOld("Mật khẩu cũng không chính xác!");
    } else {
      setIsCheckPassOld("");
    }
  };
  const handleBlur = (e) => {
    const value = e.target.value;
    if (!value) {
      setIsCheckPassOldEmpty("Vui lòng nhập mật khẩu!");
    } else {
      setIsCheckPassOldEmpty("");
    }
  };
  const handleBlur1 = (e) => {
    const value = e.target.value;
    if (!value) {
      setIsCheckPass("Vui lòng nhập mật khẩu");
    } else {
      setIsCheckPass("");
    }
  };
  const handeMatKhauMoi = (e) => {
    if (!e.target.value) {
      setIsCheckPassEmpty("Vui lòng nhập mật khẩu!");
    } else {
      setIsCheckPassEmpty("");
      setValues({
        ...values,
        matKhau: e.target.value,
      });
    }
  };
  const handleNhapLaiMk = (e) => {
    if (!e.target.value) {
      setIsCheckPassNewEmpty("Vui lòng nhập mật khẩu!");
    } else {
      setIsCheckPassNewEmpty("");
      setNhapMatKhauMoi(e.target.value);
    }
    if (e.target.value !== values.matKhau) {
      setIsCheckPassNew("Mật khẩu không trùng khớp!");
    } else {
      setIsCheckPassNew("");
    }
  };
  const handleBlur2 = (e) => {
    if (!e.target.value) {
      setIsCheckPassNew("Vui lòng nhập mật khẩu!");
    } else {
      setIsCheckPassNew("");
    }
  };
  console.log("asd ",isCheckPassEmpty);
  console.log(isCheckPassOld);
  console.log(isCheckPassNew);
  const handleSubmit = () => {
   
    // dispatch(DoiMatKhauAction(values));
  };

  return (
    <div className="taikhoan">
      <div className="taikhoan__header">
        <div
          className="logo"
          onClick={() => {
            history.push("/");
          }}
        >
          <img style={{ cursor: "pointer" }} src="/img/logo2.png" alt="" />
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
      <div className="taikhoan__content mt-md-5 mt-sm-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-0 ml-auto">
              <div className="avatar">
                <img src="/img/avatar.png" alt="" />
              </div>
              <div className="name">
                <p className="my-2">
                  {" "}
                  <i className="fa fa-user mr-2"></i>
                  {user.hoTen}
                </p>
                <p className="my-0 ">HỌC VIÊN</p>
                <p className="">===</p>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 taikhoan-right">
              <div className="taikhoan-right__title">
                <h3>Đổi mật khẩu </h3>
                <p>
                  Đây là mật khẩu sử dụng để đăng nhập. Hãy đặt mật khẩu an toàn
                  bằng cách sử dụng ít nhất 8 ký tự, bao gồm cả chữ thường và
                  chữ in hoa, chữ số và ký tự đặc biệt.
                </p>
              </div>
              <div className="taikhoan-right__content">
                {/* Mât khẩu cũ  */}
                <div className="col-12">
                  <div className="form-group">
                    <p className="p-title">
                      Mật khẩu cũ <span style={{ color: "red" }}>*</span>
                    </p>
                    <input
                      type="password"
                      placeholder="Nhập mật khẩu cũ"
                      className="form-control"
                      onChange={handleMatKhauCu}
                      onBlur={handleBlur}
                      value={matKhauCu}
                    />
                    {isCheckPassOldEmpty && (
                      <p
                        className="text-left ml-2 mr-4"
                        style={{
                          fontSize: "10px",
                          color: "red",
                          display: "inline-block",
                        }}
                      >
                        {isCheckPassOldEmpty}
                      </p>
                    )}
                    {isCheckPassOld ? (
                      <p
                        className="validata"
                        style={{
                          display: "inline-block",
                          fontSize: "10px",
                          color: "red",
                        }}
                      >
                        {isCheckPassOld}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/* Mật khẩu mới  */}
                <div className="col-12">
                  <div className="form-group">
                    <p className="p-title">
                      Mật khẩu mới <span style={{ color: "red" }}>*</span>
                    </p>
                    <input
                      type="password"
                      placeholder="Nhập mật khẩu mới"
                      className="form-control form-control-validate"
                      onChange={handeMatKhauMoi}
                      onBlur={handleBlur1}
                    />
                    {isCheckPassEmpty && (
                      <p
                        className="text-left ml-2 mr-4"
                        style={{
                          fontSize: "10px",
                          color: "red",
                          display: "inline-block",
                        }}
                      >
                        {isCheckPassEmpty}
                      </p>
                    )}
                    {isCheckPass && (
                      <p
                        style={{
                          fontSize: "10px",
                          color: "red",
                          display: "inline-block",
                        }}
                      >
                        {isCheckPass}
                      </p>
                    )}
                  </div>
                </div>
                {/* Nhập lại mật khẩu */}
                <div className="col-12">
                  <div className="form-group">
                    <p className="p-title">
                      Nhập lại mật khẩu <span style={{ color: "red" }}>*</span>
                    </p>
                    <input
                      type="password"
                      placeholder="Nhập lại mật khẩu mới"
                      className="form-control"
                      onChange={handleNhapLaiMk}
                      onBlur={handleBlur2}
                    />
                    {isCheckPassNewEmpty && (
                      <p
                        className="text-left ml-2 mr-4 mb-4"
                        style={{
                          fontSize: "10px",
                          color: "red",
                          display: "inline-block",
                        }}
                      >
                        {isCheckPassNewEmpty}
                      </p>
                    )}
                    {isCheckPassNew && (
                      <p
                        className="mb-4"
                        style={{
                          fontSize: "10px",
                          color: "red",
                          display: "inline-block",
                        }}
                      >
                        {isCheckPassNew}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  className="button-changepassword"
                  onClick={handleSubmit}
                >
                  Đổi mật khẩu
                </button>
                
                {/* {isCheckPass ||
                isCheckPassEmpty ||
                isCheckPassNew ||
                isCheckPassNewEmpty ||
                isCheckPassOld ||
                isCheckPassOldEmpty ||
                isComparePass === "" ? (
                  <button
                  type="button"
                  disabled
                  className="button-changepassword"
                  onClick={handleSubmit}
                >
                  Đổi mật khẩu
                </button>
                ) : (
                  
                )} */}
               
                <p className="mt-2">
                  <a
                    onClick={() => {
                      history.push("/");
                    }}
                    className="mr-1"
                  >
                    Trang chủ{" "}
                  </a>
                  <i className="fa fa-angle-right"></i>
                  <a
                    onClick={() => {
                      history.push("/caidat/taikhoan");
                    }}
                    className="ml-1"
                  >
                    Tài khoản
                  </a>
                </p>
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
