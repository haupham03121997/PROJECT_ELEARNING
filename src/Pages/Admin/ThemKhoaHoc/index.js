import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss";
import "./themKhoaHoc.scss";
export default function ThemKhoaHoc() {
  const _handleSubmit = (value) => {
    console.log(value);
  };

  const [date, setDate] = useState(new Date());
  const _handleGetDay = (date) => {
    setDate(date);
  };
  // console.log("start day", date.toLocaleDateString());
  const getDate = date.toLocaleDateString();
  console.log("here" , getDate);
  const taiKhoan = JSON.parse(localStorage.getItem("userLogin"));
  //   console.log(taiKhoan.taiKhoan);
  const signupUserSchema = yup.object().shape({
  
    maKhoaHoc: yup.string().required("*Không được bỏ trống!"),
    biDanh: yup
      .string()
      .required("*Không được bỏ trống!"),
    tenKhoaHoc: yup
      .string()
      .required("*Không được bỏ trống!"),
    moTa : yup.string().required("*Không được bỏ trống!"),
    maDanhMucKhoaHoc : yup.string().required("*Không được bỏ trống!")
   
  });
  return (
    <div className="content-wrapper management-user">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">
                Quản lý khóa học{" "}
                <span>
                  <i class="fa fa-angle-double-right"></i> Thêm khóa học
                </span>
              </h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                {/* <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li> */}
                {/* <li className="breadcrumb-item active">Dashboard v3</li> */}
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
            maKhoaHoc: "",
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 0,
            hinhAnh: "",
            maNhom: "GP01",
            ngayTao: "",
            maDanhMucKhoaHoc: "",
            taiKhoanNguoiTao: taiKhoan.taiKhoan,
          }}
          validationSchema={signupUserSchema}
          onSubmit={_handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="">Tài khoản người tạo</label>
                    <Field
                      render={({ field, form: { isSubmitting } }) => (
                        <input
                          {...field}
                          disabled
                          type="text"
                          placeholder="lastName"
                          className="form-control"
                          value={taiKhoan.taiKhoan}
                          name="taiKhoanNguoiTao"
                          // onChange={formikProps.handleChange(taiKhoan)}
                        />
                      )}
                    />
                    <ErrorMessage name="taiKhoanNguoiTao">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Mã khóa học</label>
                    <Field
                      name="maKhoaHoc"
                      type="text"
                      className="form-control"
                      placeholder="Eg Backend_01"
                    />
                    <ErrorMessage name="maKhoaHoc">
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
                    <label htmlFor="">Tên khóa học</label>
                    <Field
                      name="tenKhoaHoc"
                      type="text"
                      className="form-control"
                      placeholder="Eg Khóa học lập trình Nodejs"
                    />
                    <ErrorMessage name="tenKhoaHoc">
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
                    <label htmlFor="">Bí danh</label>
                    <Field name="biDanh" type="text" className="form-control" placeholder=" Eg lap-trinh-golang-2020" />
                    <ErrorMessage name="biDanh">
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
                    <label htmlFor="">Mô tả</label>
                    <Field name="moTa" type="text" className="form-control "  placeholder="Eg Lập trình Golang 2020..."/>
                    <ErrorMessage name="moTa">
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
                    <label htmlFor="">Lượt xem</label>
                    <Field
                      name="luotXem"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage name="luotXem">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div> */}
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="">Hình ảnh</label>
                    <Field
                      name="hinhAnh"
                      type="file"
                      className="form-control"
                    />
                    <ErrorMessage name="hinhAnh">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Mã danh mục khóa học</label>
                    <Field
                      name="maDanhMucKhoaHoc"
                      type="text"
                      className="form-control"
                      placeholder="Eg BackEnd"
                    />
                    <ErrorMessage name="maDanhMucKhoaHoc">
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
                    <label htmlFor="">Đánh giá</label>
                    <Field
                      name="danhGia"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage name="danhGia">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="">Mã nhóm</label>
                    <Field
                      component="select"
                      className="form-control"
                      name="maNhom"
                    >
                      <option value="GP01">GP01</option>
                      <option value="GP02">GP02</option>
                      <option value="GP03">GP03</option>
                      <option value="GP04">GP04</option>
                      <option value="GP05">GP05</option>
                      <option value="GP06">GP06</option>
                      <option value="GP07">GP07</option>
                      <option value="GP08">GP08</option>
                      <option value="GP09">GP09</option>
                      <option value="GP10">GP10</option>
                    </Field>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Ngày tạo</label>

                    {/* <Field
                      name="ngayTao"
                      type="text"
                      className="form-control"
                    /> */}
                    <DatePicker
                      value={date}
                      selected={date}
                      onChange={_handleGetDay}
                    />
                  <span className="">(*mm/dd/yy)</span>
                    <ErrorMessage name="ngayTao">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* <div className="form-group">
                    <label htmlFor="">Mã loại người dùng</label>
                    <select name="maLoaiNguoiDung" className="form-control">
                      <option value="HV">HV</option>
                      <option value="GV">GV</option>
                    </select>
                  </div> */}

                  <div className="form-group  ">
                    <button type="submit" className="btn-themKhoaHoc ">
                      Thêm khóa học
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
