import React, { useEffect, useState } from "react";
import { Select, Input, message, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../../Action/danhMucKhoaHocAction";
import { getCoursesDetailAction } from "../../../Action/danhSachKhoaHocAtion";
import {capNhatKhoaHoc} from "../../../Action/capNhatKhoaHoc"
import { Formik, Form, Field } from "formik";
import moment from "moment";
export default function CapNhatKhoaHoc({ isParams }) {
  const { Option } = Select;
  const taiKhoan = JSON.parse(localStorage.getItem("userLogin"));
  const [isDate, setIsDate] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isImage, setIsImage] = useState("");
  const [isSelect1, setIsSelect1] = useState("");
  const [isSelect2, setIsSelect2] = useState("");
  const [isTextArea, setIsTextArea] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getCoursesDetailAction(isParams));
  }, [isParams , isSubmit]);
  const { coursesDetail } = useSelector((state) => state.getCoursesList);
  const { categoriesCourses } = useSelector(
    (state) => state.getCategoriesCourses
  );

  const handleChangeSelect1 = (e) => {
    setIsSelect1(e);
  };

  const handleChangeSelect2 = (e) => {
    setIsSelect2(e);
  };

  const handleOnChangeDate = (e) => {
    const getDate = moment(e).format("DD/MM/YYYY");
    setIsDate(getDate);
  };
  const handleChangeTextArea = (e) => {
    setIsTextArea(e.target.value);
  };
  const fileChangedHandler = (e) => {
    const image = e.target.files[0];
    setIsImage(image);
  };



  // console.log("values", values);
  const _handleSubmit = (value) => {
    let frm = new FormData();
    for (let key in value) {
      frm.append(key, value[key]);
      console.log(key , value[key]);
    }
    dispatch(capNhatKhoaHoc(frm))
  };
  return (
    <>
      <div>
        <div
          className="modal fade"
          id="suakhoahoc"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-content--custom ">
              <div className="modal-header  py-0">
                <h5 className="modal-title m-auto" id="exampleModalLabel">
                  Cập nhật khóa học
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
              <div className="modal-body">
                <div className="container">
                  <div className="row modal-body_-content">
                    {coursesDetail.tenKhoaHoc &&
                    coursesDetail.danhMucKhoaHoc &&
                    coursesDetail.maKhoaHoc ? (
                      <Formik
                        enableReinitialize={true}
                        initialValues={{
                          maKhoaHoc: coursesDetail.maKhoaHoc,
                          biDanh: coursesDetail.biDanh,
                          tenKhoaHoc: coursesDetail.tenKhoaHoc,
                          moTa: isTextArea ? isTextArea : coursesDetail.moTa,
                          luotXem: 0,
                          danhGia: 0,
                          hinhAnh: isImage ? isImage : coursesDetail.hinhAnh,
                          maNhom: isSelect2 ? isSelect2 : coursesDetail.maNhom,
                          ngayTao: isDate ? isDate : coursesDetail.ngayTao,
                          maDanhMucKhoaHoc: isSelect1
                            ? isSelect1
                            : coursesDetail.danhMucKhoaHoc.maDanhMucKhoahoc,
                          taiKhoanNguoiTao: taiKhoan.taiKhoan,
                        }}
                        // onReset={_onReset}
                        // onSubmit={ (value ,  { resetForm }) => {
                        //   let frm = new FormData();
                        //   for (let key in value) {
                        //         frm.append(key, value[key]);
                        //       }
                        //       dispatch(capNhatKhoaHoc(frm));
                        //       setIsSubmit(true);
                        // }}
                        onSubmit={_handleSubmit}
                        render={(formikProps) => (
                          <Form
                            onReset={formikProps.onReset}
                            style={{ width: "100%" }}
                          >
                            <div className="container-fluid">
                              <div className="row">
                                {/* Mã khóa học  */}
                                <div className="col-6">
                                  <div className="form-group">
                                    <p className="mb-1">
                                      Mã khóa học{" "}
                                      <span style={{ color: "red" }}> *</span>
                                    </p>

                                    <Field
                                      name="firstName"
                                      render={({ field, form, meta }) => (
                                        <div>
                                          <input
                                            type="text"
                                            className="form-control"
                                            {...field}
                                            value={coursesDetail.maKhoaHoc}
                                            disabled
                                          />
                                        </div>
                                      )}
                                    />
                                  </div>
                                </div>
                                {/* Tên khóa học  */}
                                <div className="col-6">
                                  <div className="form-group">
                                    <p className="mb-1">
                                      Tên khóa học{" "}
                                      <span style={{ color: "red" }}> *</span>
                                    </p>
                                    <Field
                                      className="form-control"
                                      name="tenKhoaHoc"
                                      onChange={formikProps.handleChange}
                                    />
                                  </div>
                                </div>
                                {/* Danh mục khóa học và mã nhóm */}
                                <div className="col-6">
                                  <div className="div-total d-flex">
                                    <div className="mr-5">
                                      <p>
                                        Danh mục khóa học
                                        <span style={{ color: "red" }}>*</span>
                                      </p>
                                      <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Chọn danh mục"
                                        optionFilterProp="children"
                                        placeholder={
                                          coursesDetail.danhMucKhoaHoc
                                            .tenDanhMucKhoaHoc
                                        }
                                        value={
                                          coursesDetail.danhMucKhoaHoc.maDanhMuc
                                        }
                                        name="maDanhMucKhoaHoc"
                                        onChange={handleChangeSelect1}
                                        filterOption={(input, option) =>
                                          option.children
                                            .toLowerCase()
                                            .indexOf(input.toLowerCase()) >= 0
                                        }
                                      >
                                        {categoriesCourses.map(
                                          (category, index) => {
                                            return (
                                              <Option
                                                key={index}
                                                value={category.maDanhMuc}
                                              >
                                                {category.tenDanhMuc}
                                              </Option>
                                            );
                                          }
                                        )}
                                      </Select>
                                    </div>
                                    <div className="ml-2">
                                      <p>
                                        Mã nhóm
                                        <span style={{ color: "red" }}>*</span>
                                      </p>
                                      <Select
                                        name="maNhom"
                                        value={coursesDetail.maNhom}
                                        placeholder={coursesDetail.maNhom}
                                        onChange={handleChangeSelect2}
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
                                  <div>
                                    <p className="mt-1 mb-1">
                                      Ngày tạo{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </p>
                                    <DatePicker
                                      onChange={handleOnChangeDate}
                                      format="DD/MM/YYYY"
                                      defaultValue={moment()}
                                    />
                                  </div>
                                </div>
                                {/* Mô tả khóa học  */}
                                <div className="col-6">
                                  <p>
                                    Mô tả{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </p>
                                  <textarea
                                    onChange={handleChangeTextArea}
                                    type="text"
                                    className="form-control"
                                    placeholder={coursesDetail.moTa}
                                    name="moTa"
                                    rows="4"
                                    cols="50"
                                  />
                                </div>
                                {/* Bí danh  */}
                                <div className="col-6">
                                  <div className="form-group">
                                    <p className="mt-2 mb-0">
                                      Hình ảnh
                                      <span style={{ color: "red" }}>*</span>
                                    </p>
                                    <input
                                      type="file"
                                      placeholder="Chọn hình ảnh"
                                      onChange={fileChangedHandler}
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-group">
                                    <p className="mt-2 mb-0">
                                      Bí danh
                                      <span style={{ color: "red" }}>*</span>
                                    </p>
                                    <Field
                                      name="biDanh"
                                      className="form-control"
                                      onChange={formikProps.handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={() => {
                                      formikProps.resetForm();
                                    }}
                                  >
                                    Hủy
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                   Cập nhật
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>
                        )}
                      />
                    ) : (
                      ""
                    )}

                    {/* 
                    <div className="col-6">
                      <div className="form-group">
                        <p className="mb-1">
                          Tên khóa học <span style={{ color: "red" }}> *</span>
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          name="tenKhoaHoc"
                          value=""
                          onChange={handleChange}
                          // value={coursesDetail.tenKhoaHoc}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <p className="mb-1">
                          Bí danh <span style={{ color: "red" }}> *</span>
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          name="biDanh"
                          onChange={handleChange}
                          // value={coursesDetail.biDanh}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <p className="mb-1">
                          Mô tả <span style={{ color: "red" }}> *</span>
                        </p>
                        <textarea
                          cols="30"
                          rows="5"
                          type="text"
                          className="form-control"
                          name="moTa"
                          onChange={handleChange}
                          // value={coursesDetail.moTa}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="mb-1 ml-3">
                        Mã danh mục <span style={{ color: "red" }}> *</span>
                      </p>
                      <Select
                        //   defaultValue="lucy"
                        style={{ marginLeft: "15px", width: 300 }}
                        onChange={handleChangeSelect1}
                        // defaultValue={}
                        name="maDanhMucKhoaHoc"
                      >
                        {categoriesCourses.map((maDM, index) => {
                          return (
                            <Option key={index} value={maDM.maDanhMuc}>
                              {maDM.tenDanhMuc}
                            </Option>
                          );
                        })}
                      </Select>
                    </div>

                    <div className="form-group ml-4">
                      <p className="mb-1">
                        Mã nhóm <span style={{ color: "red" }}> *</span>
                      </p>

                      <Select
                        // defaultValue={coursesDetail.maNhom}
                        style={{ width: 120 }}
                        onChange={handleChangeSelect2}
                        name="maNhom"
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
                        <Option value="GP10">GP010</Option>
                      </Select>
                    </div>
                    <div className="col-6">
                      <div className="form-group  ml-3">
                        <p className="mb-1">
                          Ngày tạo<span style={{ color: "red" }}> *</span>
                        </p>
                        <DatePicker
                          format="DD/MM/YYYY"
                          defaultValue={moment()}
                          onChange={handleOnChangeDate}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <p className="mb-1">
                          Hình ảnh<span style={{ color: "red" }}> *</span>
                        </p>
                        <input
                          type="file"
                          onChange={fileChangedHandler}
                          // validations={[required]}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
