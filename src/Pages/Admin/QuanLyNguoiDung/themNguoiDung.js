import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Select } from "antd";
import { themNguoiDungAction } from "../../../Action/themNguoiDungAction";
const { Option } = Select;
function ThemNguoiDung() {
  const dispatch = useDispatch();
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const handelChangeSelec1 = (e) => {
    setSelect1(e);
  };
  const handelChangeSelec2 = (e) => {
    console.log(e);
    setSelect2(e);
  };
  console.log("select2", select2);
  return (
    <div>
      <div>
        {/* Button trigger modal */}

        {/* Modal */}
        <div
          className="modal fade"
          id="themnguoidung"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Thêm người dùng
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
              <Formik
                enableReinitialize={true}
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                  hoTen: "",
                  soDT: "",
                  maLoaiNguoiDung: select1 ? select1 : "HV",
                  maNhom: select2 ? select2 : "GP01",
                  email: "",
                }}
                onSubmit={(values, { resetForm }) => {
                  dispatch(themNguoiDungAction(values));
                  resetForm();
                }}
                render={(formikPops) => (
                  <Form>
                    <div className="modal-body">
                      <div className="container">
                        <div className="row">
                          <div className="col-6">
                            <div className="form-group">
                              <p className="mb-1">
                                Tài khoản{" "}
                                <span style={{ color: "red" }}> *</span>
                              </p>

                              <Field
                                className="form-control"
                                name="taiKhoan"
                                type="text"
                                placeholder="Nhập tài khoản"
                                onChange={formikPops.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group">
                              <p className="mb-1">
                                Mật khẩu{" "}
                                <span style={{ color: "red" }}> *</span>
                              </p>
                              <Field
                                className="form-control"
                                name="matKhau"
                                type="password"
                                placeholder="Nhập mật khẩu"
                                onChange={formikPops.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group">
                              <p className="mb-1">
                                Họ tên <span style={{ color: "red" }}> *</span>
                              </p>
                              <Field
                                name="hoTen"
                                type="text"
                                placeholder="Nhập họ tên"
                                className="form-control"
                                onChange={formikPops.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group">
                              <p className="mb-1">
                                Số điện thoại{" "}
                                <span style={{ color: "red" }}> *</span>
                              </p>
                              <Field
                                name="soDT"
                                type="text"
                                placeholder="Nhập số điện thoại"
                                className="form-control"
                                onChange={formikPops.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group">
                              <p className="mb-1">
                                Email <span style={{ color: "red" }}> *</span>
                              </p>
                              <Field
                                name="email"
                                type="email"
                                placeholder="Nhập email"
                                className="form-control"
                                onChange={formikPops.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-6 d-flex">
                            <div className="col-6">
                              <div className="form-group">
                                <p className="mb-1">
                                  Mã loại người dùng{" "}
                                  <span style={{ color: "red" }}> *</span>
                                </p>
                                <Select
                                  value="HV"
                                  style={{ width: 150, height: 40 }}
                                  // onChange={handleChange}
                                  // className="form-control"
                                  onChange={handelChangeSelec1}
                                >
                                  <Option value="HV">Học viên</Option>
                                  <Option value="GV">Giáo vụ</Option>
                                </Select>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <p className="mb-1">
                                  Mã nhóm{" "}
                                  <span style={{ color: "red" }}> *</span>
                                </p>
                                <Select
                                  value="GP01"
                                  style={{ width: 150, height: 40 }}
                                  onChange={handelChangeSelec2}
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
                                {/* <Field name="maNhom" as="select"  onChange={formikPops.handleChange}>
                                  <option value="red">Red</option>
                                  <option value="green">Green</option>
                                  <option value="blue">Blue</option>
                                </Field> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Hủy
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Thêm người dùng
                      </button>
                    </div>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThemNguoiDung;
