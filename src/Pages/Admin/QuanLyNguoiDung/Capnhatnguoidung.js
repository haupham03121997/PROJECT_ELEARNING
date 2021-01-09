
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { Select } from "antd";
import { timKiemNguoiDungAction } from "./../../../Action/timKiemNguoiDungAction";
import { CapNhatNguoiDungAction } from "./../../../Action/capNhatNguoiDungAction";
export default function Capnhatnguoidung({ isParams, isChecked }) {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [maNhom, setMaNhom] = useState(""); 
  const [isCheck, setIsCheck] = useState(false);
  const [select1, setMaLoaiNguoiDung] = useState("");


  useEffect(() => {
    dispatch(timKiemNguoiDungAction(isParams));
  }, [isParams]);

  const { timKiemNguoiDung } = useSelector(
    (state) => state.TimKiemNguoiDungReDucer
  );
  const values = timKiemNguoiDung[0];
  const handleChangeSelect2 = (e) => {
    setMaNhom(e);
  };
  const handleChangeSelect1 = (e) => {
    setMaLoaiNguoiDung(e);
  };
  // const _hanldeSubmit = (value) => {
  //   dispatch(CapNhatNguoiDungAction(value));
  // };
  return (
    <div>
      <div
        className="modal fade"
        id="capnhatuser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cập nhật người dùng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {values && (
              <Formik
                enableReinitialize={true}
                initialValues={{
                  taiKhoan: values.taiKhoan,
                  matKhau: values.matKhau,
                  hoTen: values.hoTen,
                  soDT: values.soDt,
                  maLoaiNguoiDung: select1 ? select1 : values.maLoaiNguoiDung,
                  maNhom: maNhom ? maNhom : "GP01",
                  email: values.email,
                }}
                onSubmit={(values, { resetForm }) => {
                  dispatch(CapNhatNguoiDungAction(values));
                  isChecked(!isCheck);
                  resetForm();
                }}
                render={(formifProps) => (
                  <Form>
                    <div className="modal-body">
                      <div className="container">
                        <div className="row">
                          {/* Tài Khoản  */}
                          <div className="col-6">
                            <p className="mb-1">
                              Tài khoản <span style={{ color: "red" }}> *</span>
                            </p>
                            <Field
                              name="taiKhoan"
                              render={({ field, form, meta }) => (
                                //   console.log("field"  , field ,"form" , form , 'meta' , meta)
                                <div>
                                  <input
                                    style={{ height: "38px" }}
                                    type="text"
                                    className="form-control"
                                    {...field}
                                    name="taiKhoan"
                                    disabled
                                  />
                                </div>
                              )}
                            />
                          </div>
                          {/* Mật khẩu  */}
                          <div className="col-6">
                            <div className="form-group">
                              <p className="mb-1">
                                Mật khâu{" "}
                                <span style={{ color: "red" }}> *</span>
                              </p>
                              <div>
                                <Field
                                  style={{ height: "38px" }}
                                  name="matKhau"
                                  type="password"
                                  className="form-control"
                                  onChange={formifProps.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          {/* Họ tên */}
                          <div className="col-6">
                            <div className="form-group">
                              <p className="mb-1">
                                Họ tên <span style={{ color: "red" }}> *</span>
                              </p>
                              <div>
                                <Field
                                  style={{ height: "38px" }}
                                  name="hoTen"
                                  type="text"
                                  className="form-control"
                                  onChange={formifProps.handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Số điện thoại */}
                          <div className="col-6">
                            <div className="form-group">
                              <p className="mb-1">
                                Số điện thoại{" "}
                                <span style={{ color: "red" }}> *</span>
                              </p>
                              <div>
                                <Field
                                  style={{ height: "38px" }}
                                  name="soDT"
                                  type="text"
                                  className="form-control"
                                  onChange={formifProps.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          {/* Email*/}
                          <div className="col-6">
                            <div className="form-group">
                              <p className="mb-1">
                                Email <span style={{ color: "red" }}> *</span>
                              </p>
                              <div className="div">
                                <Field
                                  style={{ height: "38px" }}
                                  name="email"
                                  type="email"
                                  className="form-control"
                                  onChange={formifProps.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="d-flex">
                              <div className="mr-5">
                                <p className="mb-0">
                                  Mã loại người dùng
                                  <span style={{ color: "red" }}>*</span>
                                </p>
                                <Select
                                  style={{ width: 200 }}
                                  onChange={handleChangeSelect1}
                                  defaultValue={values.maLoaiNguoiDung}
                                >
                                  <Option value="HV">Học viên</Option>
                                  <Option value="GV">Giảng viên</Option>
                                </Select>
                              </div>
                              <div className="">
                                <p className="mb-0">
                                  Mã nhóm
                                  <span style={{ color: "red" }}>*</span>
                                </p>

                                <Select
                                  onChange={handleChangeSelect2}
                                  defaultValue="GP01"
                                >
                                  <Option value="GP01">GP01</Option>
                                  <Option value="GP02">GP02</Option>
                                  <Option value="GP03">GP03</Option>
                                  <Option value="GP04">GP04</Option>
                                  <Option value="GP05">GP05</Option>
                                  <Option value="GP06">GP06</Option>
                                  <Option value="GP07">GP07</Option>
                                  <Option value="GP08">GP08</Option>
                                  <Option value="GP09">GP09</Option>
                                  <Option value="GP10">GP10</Option>
                                </Select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Hủy
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Cập nhật
                      </button>
                    </div>
                  </Form>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
