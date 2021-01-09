import React from "react";
// import style from "../../../scss/Layouts/_signup.scss"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { themNguoiDungAction } from "../../../Action/themNguoiDungAction";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker, Space  ,Button} from 'antd';
import 'antd/dist/antd.css';
export default function ThemUser() {
  const dispatch = useDispatch();
  const _handleSubmit = (values) => {
    dispatch(themNguoiDungAction(values));
    // console.log("values" , values);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const lowcaseRegex = /(?=.*[a-z])/;
  const upcaseRegex = /(?=.*[A-Z])/;
  const numbericRegex = /(?=.*[0-9])/;
  const signupUserSchema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("*Không được bỏ trống!")
      .min(2, "*Too short"),
    matKhau: yup
      .string()
      .required("*Không được bỏ trống!")
      .matches(lowcaseRegex, "*Một chữ viết thường")
      .matches(upcaseRegex, "*Một chữ viết hoa")
      .matches(numbericRegex, "*Bao gồm 1 số")
      .min(8, "*Ít nhất 8 ký tự"),
    hoTen: yup.string().required("*Không được bỏ trống!"),
    soDT: yup
      .string()
      .matches(/^[0-9]+$/)
      .required("*Không được bỏ trống!"),
    email: yup
      .string()
      .required("*Không được bỏ trống!")
      .email("*email không đúng định dạng"),
  });
  return (
    <div className="content-wrapper management-user">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">
                Quản Lý Người Dùng{" "}
                <span>
                  <i class="fa fa-angle-double-right"></i> Thêm Người Dùng
                </span>
              </h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
              
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className="content">
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
            email: "",
          }}
          validationSchema={signupUserSchema}
          onSubmit={_handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="">Tài khoản</label>
                    <Field
                      name="taiKhoan"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage name="taiKhoan">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Họ Tên</label>
                    <Field name="hoTen" type="text" className="form-control" />
                    <ErrorMessage name="hoTen">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Số điện thoại</label>
                    <Field name="soDT" type="text" className="form-control" />
                    <ErrorMessage name="soDT">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage name="email">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="">Mật Khẩu</label>
                    <Field
                      name="matKhau"
                      type="password"
                      className="form-control"
                    />
                     {/* <DatePicker onChange={onChange} /> */}
                     <Button type="primary">Primary Button</Button>
                    <ErrorMessage name="matKhau">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Mã loại người dùng</label>
                    <select name="maLoaiNguoiDung" onChange={formikProps.handleChange} className="form-control">
                      <option value="HV">HV</option>
                      <option value="GV">GV</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Mã nhóm</label>
                    <Field
                      component="select"
                      className="form-control"
                      name="maNhom"
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
                    <button type="submit" className="btn btn-success">
                      Thêm
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        />
      </div>
      {/* /.row */}

      {/* /.content */}
      {/* <Pagination currentPage={userList.currentPage} pageSize={userList.count} totalCount={userList.totalPages} onChange={(page)=>{
          console.log("paginnation" , page);
        }} /> */}
    </div>
  );
}
