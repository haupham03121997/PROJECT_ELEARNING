import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CapNhatNguoiDungAction } from "../../../Action/capNhatNguoiDungAction";
import { Formik, Field, Form, ErrorMessage } from "formik";
import swal from "sweetalert";
import * as yup from "yup";
import "./updateUser.scss";

export default function CapNhatNguoiDung(props) {
  const { match } = props;
  const taiKhoan = match.params.taiKhoan;
  // console.log(taiKhoan);
  const dispatch = useDispatch();
  const _handleSubmit = (value) => {
    // console.log("Giá trị đầu vào", value);
    swal({
      title: "Cập nhật thông tin người dùng?",
      text: "Thông tin người dùng sẽ bị thay đổi sau khi cập nhật!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(CapNhatNguoiDungAction(value))
        swal("Câp nhật thành công!", {
          icon: "success",
        });
      } else {
        swal("Đã hủy cập nhật thông tin!");
      }
    });
    ;
    
  };
  const updateUserSchema = yup.object().shape({
    matKhau: yup
      .string()
      .required("*Không được bỏ trống")
      .min(8, "*Ít nhất 8 ký tự"),
    hoTen: yup.string().required("*Không được bỏ trống"),
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
              <h1 className="m-0 text-dark">Quản Lý Người Dùng</h1>
              {/* <p>VV {infoUser.taiKhoan}</p> */}
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right"></ol>
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-4"></div>
            <div className="col-6"></div>
          </div>
          {/* /.row */}
          <div className="row mt-5 border rounded">
            <div className="col-2"></div>
            <div className="col-8 mb-5">
              <Formik
                initialValues={{
                  taiKhoan: taiKhoan,
                  matKhau: "",
                  hoTen: "",
                  soDT: "",
                  maLoaiNguoiDung: "HV",
                  maNhom: "GP01",
                  email: "",
                }}
                onSubmit={_handleSubmit}
                validationSchema={updateUserSchema}
                render={(formikProps) => (
                  <Form>
                    <div className="form-group">
                      <p>Tài khoản</p>
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
                      <p>Mật khẩu</p>
                      <Field
                        type="password"
                        className="form-control"
                        name="matKhau"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="matKhau">
                        {(msg) => (
                          <div className="updateUser alert alert-warning">
                              <i className="fa fa-exclamation-triangle" />{msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <p>Họ tên</p>
                      <Field
                        type="text"
                        className="form-control"
                        name="hoTen"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="hoTen">
                        {(msg) => (
                          <div className="alert alert-warning">  <i className="fa fa-exclamation-triangle" />{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <p>Số điện thoại</p>
                      <Field
                        type="text"
                        className="form-control"
                        name="soDT"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="soDT">
                        {(msg) => (
                          <div className="alert alert-warning">
                            <i className="fa fa-exclamation-triangle" />
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <p>Email</p>
                      <Field
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="email">
                        {(msg) => (
                          <div className="alert alert-warning">
                              <i className="fa fa-exclamation-triangle" />{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <p>Mã loại người dùng</p>
                      <Field
                        component="select"
                        name="maLoaiNguoiDung"
                        onChange={formikProps.handleChange}
                        className="form-control"
                      >
                        <option value="HV">HV</option>
                        <option value="GV">GV</option>
                      </Field>
                    </div>
                    <div className="form-group">
                      <p>Mã nhóm</p>
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
                    <div className="div">
                      <button type="submit" className="btn btn-primary">
                        Cập nhật
                      </button>
                    </div>
                  </Form>
                )}
              />
            </div>

            <div className="col-2 mb-5"></div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}
