import React from "react";
import {useDispatch , useSelector} from "react-redux"
import { Formik, Form, Field, ErrorMessage } from "formik";
import {DoiMatKhauAction} from '../../Action/doiMatKhauAction'
import * as yup from "yup";
export default function DoiMatKhau() {

  const dispatch = useDispatch();
  const _handleSubmit = (value) => {
    // if (value.matKhau === "Haupham0312"){
    //   alert("123");
    // }
    dispatch(DoiMatKhauAction(value));
  };
  const lowcaseRegex = /(?=.*[a-z])/;
  const upcaseRegex = /(?=.*[A-Z])/;
  const numbericRegex = /(?=.*[0-9])/;
  const changePasswordSchema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("*Không được bò trống!")
      .min(2, "*Too short"),
    matKhau: yup
      .string()
      .required("*Không được bò trống!")
      .matches(lowcaseRegex, "*Một chữ viết thường")
      .matches(upcaseRegex, "*Một chữ viết hoa")
      .matches(numbericRegex, "*Bao gồm 1 số")
      .min(8, "*Ít nhất 8 ký tự"),
    hoTen: yup.string().required("*Không được bò trống!"),
    soDT: yup
      .string()
      .matches(/^[0-9]+$/)
      .required("*Không được bò trống!"),
    email: yup
      .string()
      .required("*Không được bò trống!")
      .email("*email không đúng định dạng"),
  });
  return (
    <div className="container user-info">
      <h3>Thông tin tài khoản</h3>
      <div className="row">
        <div className="col-md-3 col-sm-0 user-info__left text-center">
          <img src="/img/username.jpg" alt="" />
          <p className="text-center">Học Viên</p>
          <div className="user-info__left__btn">
            <button className="btn btn-primary">0 điểm</button>
            <button className="btn btn-success">Khóa Học</button>
          </div>
          <div className="user-info__left__title mt-4 ml-5">
            <p style={{cursor:"pointer"}}>
              <i class="fa fa-user"></i> Thông tin tài khoản
            </p>
            <p style={{cursor:"pointer"}} onClick={() => {}}>
              <i class="fa fa-lock"></i>Đổi mật khẩu
            </p>
            <p style={{cursor:"pointer"}}>
              <i class="fa fa-book"></i> Khóa học của tôi
            </p>
          </div>
        </div>
        <div className="col-md-9 col-sm-12">
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              soDT: "",
              email: "",
              maNhom:"GP01",
              maLoaiNguoiDung: "HV"
            }}
            validationSchema={changePasswordSchema}
            onSubmit={_handleSubmit}
            render={(propFormik) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="">Tài khoản</label>
                  <Field
                    type="text"
                    name="taiKhoan"
                    className="form-control"
                    onChange={propFormik.handleChange}
                  />
                  <ErrorMessage name="taiKhoan">
                    {(msg) => <div className="alert alert-warning">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={propFormik.handleChange}
                  />
                  <ErrorMessage name="email">
                    {(msg) => <div className="alert alert-warning">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="">Họ tên</label>
                  <Field
                    type="text"
                    name="hoTen"
                    className="form-control"
                    onChange={propFormik.handleChange}
                  />
                  <ErrorMessage name="hoTen">
                    {(msg) => <div className="alert alert-warning">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="">Số điện thoại</label>
                  <Field
                    type="text"
                    name="soDT"
                    className="form-control"
                    onChange={propFormik.handleChange}
                  />
                  <ErrorMessage name="soDT">
                    {(msg) => <div className="alert alert-warning">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="">Mật khẩu mới</label>
                  <Field
                    type="password"
                    name="matKhau"
                    className="form-control"
                    onChange={propFormik.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Loại người dùng</label>
                  <Field
                    type="text"
                    name="maLoaiNguoiDung"
                    className="form-control"
                    onChange={propFormik.handleChange}
                  />
                </div>
                <div className="form-group">
                                    <label htmlFor="">Mã nhóm:</label>
                                    <Field component="select" name="maNhom" onChange={propFormik.handleChange} className='form-control'>
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
                {/* <div className="form-group">
                  <label htmlFor="">Nhập lại mật khẩu</label>
                  <Field
                    type="password"
                    name="nhaplaimatkhau"
                    className="form-control"
                    onChange={propFormik.handleChange}
                  />
                  <ErrorMessage name="soDT">
                    {(msg) => <div className="alert alert-warning">{msg}</div>}
                  </ErrorMessage>

                </div> */}
                <div  className=" mb-5 text-right">
                  <button type="submit" className="btn btn-primary">Thay đổi mật khẩu</button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  );
}
