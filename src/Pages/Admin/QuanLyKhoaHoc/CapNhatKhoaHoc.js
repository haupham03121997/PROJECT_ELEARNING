import React, { useEffect, useState } from "react";
import { Select, DatePicker, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../../Action/danhMucKhoaHocAction";
import { getCoursesDetailAction } from "../../../Action/danhSachKhoaHocAtion";
import { Formik, Form, Field } from "formik";
import moment from "moment";
export default function CapNhatKhoaHoc({ isParams }) {
  const { Option } = Select;
  const taiKhoan = JSON.parse(localStorage.getItem("userLogin"));
  console.log(taiKhoan.taiKhoan);
  
  const [isSubmit, setIsSubmit] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getCoursesDetailAction(isParams));
  }, [isParams ]);
  const { coursesDetail } = useSelector((state) => state.getCoursesList);
  

  const { categoriesCourses } = useSelector(
    (state) => state.getCategoriesCourses
  );
 
  const handleChangemaKH = (e) => {
    setIsSubmit(e.target.value);
  };
  console.log(isSubmit);
  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setValues({
    //   ...values,
    //   [name]: value,
    // });
  };

  const handleChangeSelect1 = (e) => {
    // setValue({
    //   ...values,
    //   maDanhMucKhoaHoc: e,
    // });
  };
  const handleChangeSelect2 = (e) => {
    // setValue({
    //   ...values,
    //   maNhom: e,
    // });
  };

  const handleOnChangeDate = (e) => {
    // let getDate = moment(e).format("DD/MM/YYYY");
    // setValue({
    //   ...values,
    //   ngayTao: getDate,
    // });
  };
  const fileChangedHandler = (e) => {};

  const handleSubmit = () => {};

  // console.log("values", values);
  const _handleSubmit = (value) => {
    console.log("value", value);
    console.log(coursesDetail);
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
                  Thêm khóa học
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
                    {/* <div className="col-6">
                      <div className="form-group">
                        <p className="mb-1">
                          Người tạo <span style={{ color: "red" }}> *</span>
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          value={taiKhoan.taiKhoan}
                          disabled
                        />
                      </div>
                    </div> */}
                    {coursesDetail.maKhoaHoc ? (
                      <Formik
                        initialValues={{
                          maKhoaHoc: coursesDetail.maKhoaHoc,
                          biDanh: "",
                          tenKhoaHoc: "",
                          moTa: "",
                          luotXem: 0,
                          danhGia: 0,
                          hinhAnh: "",
                          maNhom: "GP01",
                          ngayTao: "",
                          maDanhMucKhoaHoc: coursesDetail.danhMucKhoaHoc.maDanhMucKhoahoc,
                          taiKhoanNguoiTao: taiKhoan.taiKhoan,
                        }}
                        // onReset={_onReset}
                        onSubmit={_handleSubmit}
                        render={(formikProps) => (
                          <Form style={{ width : "100%"}}>
                            <div className="col-6">
                              <div className="form-group">
                                <p className="mb-1">
                                  Mã khóa học{" "}
                                  <span style={{ color: "red" }}> *</span>
                                </p>
                                <Field
                                  type="text"
                                  className="form-control"
                                  name="maKhoaHoc"
                                  placeholder={coursesDetail.maKhoaHoc}
                                  onChange={formikProps.handleChange}
                                />
                           
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"

                              >
                                Close
                              </button>
                              <button
                                // onClick={handleSubmit}
                                type="submit"
                                className="btn btn-primary"
                              >
                                Thêm khóa học
                              </button>
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
