import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect, useLocation, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Login  , LOGINFACEBOOK} from "../../Action/User";
import { Checkbox } from 'antd';
import Facebook from "../../component/SigninFacebook";
export default function Signin() {
  // const history = useHistory();
  const { credential, err } = useSelector((state) => state.UserReducer);
  const { credentialFacebook } = useSelector((state) => state.UserReducer);
  // console.log("credentialLogin" , credentialFacebook);
  // console.log("credential" , credential);
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
      return <Redirect to="admin/index" />;
    }
    if (credential.maLoaiNguoiDung === "HV") {
      const { search } = location;
      const redirect = search.split("?redirect=")[1];
      return <Redirect to={redirect ? redirect : "/"} />;
    }
  }
  if(credentialFacebook !== null){
      return <Redirect to="/" />
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
            <div className="col-lg-3 col-md-0"></div>
            <div className="col-md-6 col-sm-12 my-md-2 my-sm-1 border rounded signin-form">
              <h1 className="text-center display-4 my-4">Đăng Nhập</h1>
              <p className="px-1 text-center">
                Đào tạo Chuyên Gia Lập Trình theo dự án doanh nghiệp. * Học theo
                dự án thực tế. * Phương pháp đột phá, hào hứng mỗi buổi đến lớp,
                code ngay tại lớp, không lý thuyết lan man. * Đào tạo Lập trình
              </p>
                <div style={{ margin : "auto" , textAlign: "center"}}>
                <Facebook />
                <p>Mẹo: Đăng nhập nhanh hơn với Facebook!</p>
                <p>Hoặc</p>
                </div>
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                }}
                onSubmit={_hanleSubmit}
                validationSchema={signinUserSchema}
                render={(formiProps) => (
                  <Form>
                    <div className="form-group mb-2">
                      <label htmlFor="">
                        Tài Khoản <span style={{ color: "red" }}>*</span>
                      </label>
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
                          <p>{msg}</p>
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group ">
                      <label htmlFor="">
                        Mật Khẩu <span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="password-input">
                        <Field
                          name="matKhau"
                          type={isShowPass ? "text" : "password"}
                          className="form-control "
                          onChange={formiProps.handleChange}
                          placeholder="Nhập mật khẩu"
                        />
                        <span className="eye-show">
                        <i
                          onClick={() => {
                            setIsShowPass(!isShowPass);
                          }}
                          className="fa fa-eye-slash"
                        ></i>
                        </span>
                      </div>
                      {/* <div className="show-pass">
                       
                      </div> */}
                      <ErrorMessage name="matKhau">
                        {(msg) => (
                          <div className="errMessage">
                            <span className="errInput animate__animated animate__bounce animate__shakeX">
                              {" "}
                              {/* <i className="fa fa-exclamation-triangle"></i> */}
                            </span>
                            {/* <i className="fa fa-exclamation-triangle mr-1"></i> */}
                            <p>{msg}</p>
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
                    <Checkbox >Nhớ mật khẩu</Checkbox>
                    <div className="my-2 text-center">
                      <div className="form-group">
                        <button type="submit" className="btn-signin">
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
                        <p className="text-center mb-0">
                          Bạn chưa có tài khoản?
                        </p>
                        <p className="text-center">
                          <Link className="signupTo" to="/Dangky">
                            Đăng kí để trãi nghiệm
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Form>
                )}
              />
            </div>
            <div className="col-lg-3 col-md-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
