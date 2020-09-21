import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect, useLocation, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Login } from "../../Action/User";
export default function Signin() {
  // const history = useHistory();
  const { credential, err } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const _hanleSubmit = (value) => {
    // dispatch(LOGIN(value))
    // console.log("value", value);
    dispatch(Login(value));

  };
  const location = useLocation();

  const [isShowPass, setIsShowPass] = useState(false);
  if (credential !== null) {
    if (credential.maLoaiNguoiDung === "GV") {
      return <Redirect to="admin/user-management" />;
    }
    if (credential.maLoaiNguoiDung === "HV") {
      const { search } = location;
      const redirect = search.split("?redirect=")[1];
      return <Redirect to={redirect ? redirect : "/"} />;
    }
  }
  const signinUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Tài khoản trống"),
    matKhau: yup.string().required("*Mật khẩu trống"),
  });
  return (
    <div className="SignIn">
      <div className="logo" style={{ cursor: "pointer" }}>
        <Link to="/">
          <img src="/img/logo2.png" alt="" />
        </Link>
      </div>
      <div className="backgroung-login">
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 my-5 border rounded signin-form">
              <h1 className="text-center display-4 my-4">Đăng Nhập</h1>
              <p className="px-1 text-center">
                Đào tạo Chuyên Gia Lập Trình theo dự án doanh nghiệp. * Học theo
                dự án thực tế. * Phương pháp đột phá, hào hứng mỗi buổi đến lớp,
                code ngay tại lớp, không lý thuyết lan man. * Đào tạo Lập trình
              </p>
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                }}
                onSubmit={_hanleSubmit}
                validationSchema={signinUserSchema}
                render={(formiProps) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="">Tài Khoản</label>
                      <Field
                        type="text"
                        name="taiKhoan"
                        className="form-control"
                        onChange={formiProps.handleChange}
                        placeholder="Eg Cybersoft"
                      />
                      <ErrorMessage name="taiKhoan">
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
                      <label htmlFor="">Mật Khẩu</label>
                      <Field
                        name="matKhau"
                        type={isShowPass ? "text" : "password"}
                        className="form-control "
                        onChange={formiProps.handleChange}
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
                              {/* <i className="fa fa-exclamation-triangle"></i> */}
                            </span>
                            {/* <i className="fa fa-exclamation-triangle mr-1"></i> */}
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    {err ? (
                      <p style={{ color: "red" }}>
                        *Tài khoản hoặc mật khẩu không đúng!
                      </p>
                    ) : (
                      ""
                    )}
                    <div className="mb-5 text-center">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-signup btn-warning "
                        >
                          Đăng nhập
                        </button>
                      </div>
                      {/* <button
                                            className='btn btn-outline-warning'
                                            onClick={() => {
                                                history.push(`/DangKy`)
                                            }}
                                        >Đăng Ký</button> */}
                    </div>
                    <div>
                      <div>
                        <p className="text-center">
                         Bạn chưa có tài khoản?
                        </p>
                        <p className="text-center">
                            <Link to="/Dangky">Đăng kí để trãi nghiệm</Link>
                        </p>
                      </div>
                    </div>
                  </Form>
                )}
              />
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
