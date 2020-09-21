import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignupAction } from "../../Action/Signup";
import { useHistory, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import swal from "sweetalert";

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isShowPass, setIsShowPass] = useState(false);
  console.log(isShowPass);
  const _handleSubmit = (value) => {
    dispatch(SignupAction(value));
    swal({
      title: "Đăng Ký",
      text: "Bạn đã đăng ký thành công",
      icon: "success",
      button: "Đóng",
    });
    history.push("/DangNhap");
  };

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
      .required("Số điện thoại đang trống!"),
    email: yup
      .string()
      .required("Email đang trống!")
      .email("*Email không đúng định dạng"),
  });

  // const [value, setValues] = useState({
  //     matKhau: "",
  //     nhapLaiMatKhau: ""
  // })

  return (
    <div className="signup">
      <div className="logo" style={{ cursor: "pointer" }}>
        <Link to="/">
          <img src="/img/logo2.png" alt="" />
        </Link>
      </div>
      <div className="container mt-5">
        <div className="signup__form">
          <h1 className="text-center">ĐĂNG KÝ THÀNH VIÊN</h1>
          <p className="px-5 text-center">
            Đào tạo Chuyên Gia Lập Trình theo dự án doanh nghiệp. * Học theo dự
            án thực tế. * Phương pháp đột phá, hào hứng mỗi buổi đến lớp, code
            ngay tại lớp, không lý thuyết lan man. * Đào tạo Lập trình
          </p>

          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              soDT: "",
              maNhom: "GP01",
              email: "",
            }}
            validationSchema={signupUserSchema}
            onSubmit={_handleSubmit}
            render={(formikProps) => (
              <Form>
                <div className="form-group">
                  <span className="mb-5">Tài khoản</span>
                  <Field
                    type="text"
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                    className="form-control mt-3"
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
                  <span>Mật khẩu</span>
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
                {/* <div className="form-group">
                                    <label htmlFor="">Nhập lại mật khẩu:</label>
                                    <Field type="password" name="matKhau" value={value.nhapLaiMatKhau} onChange={formikProps.handleChange} className='form-control' placeholder='Mật khẩu' />
                                    <ErrorMessage name="matKhau">
                                        {(msg) => <div className="alert alert-warning">{msg}</div>}
                                    </ErrorMessage>
                                </div> */}
                <div className="form-group">
                  <span>Họ và tên</span>
                  <Field
                    type="text"
                    name="hoTen"
                    onChange={formikProps.handleChange}
                    className="form-control"
                    placeholder="Eg Phạm Xuân Hậu"
                  />
                  <ErrorMessage name="hoTen">
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
                  <span>Email</span>
                  <Field
                    type="text"
                    name="email"
                    onChange={formikProps.handleChange}
                    className="form-control"
                    placeholder="Eg xuanhau031297@gmail.com"
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
                  <span>Số điện thoại</span>
                  <Field
                    type="text"
                    name="soDT"
                    onChange={formikProps.handleChange}
                    className="form-control"
                    placeholder=" +84 373 331 451"
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
                <div className="form-group">
                  <span>Mã nhóm</span>
                  <Field
                    component="select"
                    name="maNhom"
                    onChange={formikProps.handleChange}
                    className="form-control"
                  >
                    <option value="">GP01</option>
                    <option value="">GP02</option>
                    <option value="">GP03</option>
                    <option value="">GP04</option>
                    <option value="">GP05</option>
                    <option value="">GP06</option>
                    <option value="">GP07</option>
                    <option value="">GP08</option>
                    <option value="">GP09</option>
                    <option value="">GP10</option>
                  </Field>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-signup btn-warning ">
                    Đăng Ký
                  </button>
                </div>
                <div>
                  <p className="text-center">
                    Bằng cách đăng ký, bạn đồng ý với các điều khoản sử dụng của
                    chúng tôi
                  </p>
                </div>
              </Form>
            )}
          />
        </div>
        <div className="signin text-center">
          <span>Bạn đã có tài khoản?</span>
          <a
            onClick={() => {
              history.push(`/DangNhap`);
            }}
          >
            Đăng Nhập
          </a>
        </div>
        <div className="goHome">
          <span>
            <i className="fa fa-angle-double-left mr-1"></i>Về trang chủ
          </span>
        </div>
      </div>
    </div>
  );
}
