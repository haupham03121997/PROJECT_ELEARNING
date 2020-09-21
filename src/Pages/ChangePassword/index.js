import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DoiMatKhauAction } from "../../Action/doiMatKhauAction";
import { Form, Formik, Field, ErrorMessage } from "formik";

import * as yup from "yup";
import swal from "sweetalert";
import "./changepassword.scss";

export default function DoimatKhau(props) {
  const { match } = props;
  console.log(match);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isShowPass, setIsShowPass] = useState(false);

  const handleSubmit = (value) => {
    swal({
      title: "Thay đổi mật khẩu?",
      text: "Mật khẩu bạn thay đổi sẽ được đăng nhập vào lần tới!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Thay đổi mật khẩu thành công!", {
          icon: "success",
        });
        dispatch(DoiMatKhauAction(value));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    
  };

  const user = JSON.parse(localStorage.getItem("userLogin"));
  console.log("local", user);
  console.log("user.hoTen :", user.hoTen);

  // console.log("user", user);
  const taiKhoan = match.params.taiKhoan;
  //  console.log(taiKhoan);

  //  const taiKhoan = user.taiKhoan;
  const hoTen = user.hoTen;
  const email = user.email;
  const soDT = user.soDT;

  const lowcaseRegex = /(?=.*[a-z])/;
  const upcaseRegex = /(?=.*[A-Z])/;
  const numbericRegex = /(?=.*[0-9])/;

  const signupUserSchema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("Tài khoản đang trống!")
      .min(2, "*Too short"),
    matKhau: yup
      .string()
      .required("Mật khẩu đang trống!")
      .matches(lowcaseRegex, "*Một chữ viết thường")
      .matches(upcaseRegex, "*Một chữ viết hoa")
      .matches(numbericRegex, "*Bao gồm 1 số")
      .min(8, "*Ít nhất 8 ký tự"),
    hoTen: yup.string().required("Họ tên đang trống!"),
    soDT: yup
      .string()
      .matches(/^[0-9]+$/)
      .required("Số điện thoại đang trống!")
      .min(10, "Bao gồm 10 số"),

    email: yup
      .string()
      .required("Email đang trống!")
      .email("*Email không đúng định dạng"),
  });
  //   console.log(credential);

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
                  {user.hoTen}
                </p>
                <p className="my-0 ">HỌC VIÊN</p>
                <p className="">===</p>
              </div>
            </div>
            <div className="col-9 taikhoan-right">
              <div className="taikhoan-right__title">
                <h3>Đổi mật khẩu </h3>
                <p>
                  Đây là mật khẩu sử dụng để đăng nhập. Hãy đặt mật khẩu an toàn
                  bằng cách sử dụng ít nhất 8 ký tự, bao gồm cả chữ thường và
                  chữ in hoa, chữ số và ký tự đặc biệt.
                </p>
              </div>
              <div className="taikhoan-right__content">
                <Formik
                  initialValues={{
                    taiKhoan: taiKhoan,
                    matKhau: "",
                    hoTen: hoTen,
                    soDT: soDT,
                    maLoaiNguoiDung: "HV",
                    maNhom: "GP01",
                    email: email,
                  }}
                  validationSchema={signupUserSchema}
                  onSubmit={handleSubmit}
                  render={(formikProps) => (
                    <Form>
                      <div className="form-group">
                        <p>Tài Khoản</p>
                        <Field
                          render={({ field, form: { isSubmitting } }) => (
                            <input
                              {...field}
                              disabled
                              type="text"
                              placeholder="lastName"
                              className="form-control"
                              value={taiKhoan}
                              name="taiKhoan"
                              // onChange={formikProps.handleChange(taiKhoan)}
                            />
                          )}
                        />
                      </div>
                      <div className="form-group">
                        <p>Nhập email</p>
                        <Field
                          render={({ field, form: { isSubmitting } }) => (
                            <input
                              {...field}
                              disabled
                              type="email"
                              placeholder="VD 123@gmail.com"
                              className="form-control"
                              value={email}
                              name="email"
                              // onChange={formikProps.handleChange(taiKhoan)}
                            />
                          )}
                        />
                        <ErrorMessage name="email">
                          {(msg) => (
                            <div className="errMessage">
                              <span className="errInput animate__animated animate__bounce animate__shakeX">
                                {" "}
                                <i className="fa fa-exclamation-triangle"></i>
                              </span>
                              {/* <i className="fa fa-exclamation-triangle mr-1"></i> */}
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <p>Nhập số điện thoại </p>
                        <Field
                          render={({ field, form: { isSubmitting } }) => (
                            <input
                              {...field}
                              disabled
                              type="text"
                              placeholder="VD 123187123"
                              className="form-control"
                              value={soDT}
                              // onChange={formikProps.handleChange(taiKhoan)}
                            />
                          )}
                        />
                        <ErrorMessage name="soDT">
                          {(msg) => (
                            <div className="errMessage">
                              <span className="errInput animate__animated animate__bounce animate__shakeX">
                                {" "}
                                <i className="fa fa-exclamation-triangle"></i>
                              </span>
                              {/* <i className="fa fa-exclamation-triangle mr-1"></i> */}
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group password">
                        <p> Nhập mật khẩu mới</p>
                        <Field
                          type={isShowPass ? "text" : "password"}
                          name="matKhau"
                          onChange={formikProps.handleChange}
                          className="form-control"
                          placeholder="Nhập mật khẩu"
                        />
                        <div className="show-pass">
                          <i
                            onClick={() => {
                              setIsShowPass(!isShowPass);
                            }}
                            className="fa fa-eye-slash"
                          ></i>
                        </div>
                        <ErrorMessage name="matKhau">
                          {(msg) => (
                            <div className="errMessage">
                              <span className="errInput animate__animated animate__bounce animate__shakeX">
                                {" "}
                                <i className="fa fa-exclamation-triangle"></i>
                              </span>
                              {/* <i className="fa fa-exclamation-triangle mr-1"></i> */}
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>

                      <button
                        type="submit"
                        className="button-changepassword my-5"
                      >
                        Đổi mật khẩu
                      </button>
                    </Form>
                  )}
                />
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
