import React, { useEffect, useState } from "react";
import { Select, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../../Action/danhMucKhoaHocAction";
import { ThemKhoaHocAction } from "../../../Action/themKhoaHocAction";
import moment from "moment";

export default function ThemKhoaHoc({OnChecked}) {
  // console.log("props" , props);
  
  const taiKhoan = JSON.parse(localStorage.getItem("userLogin"));
  const dispatch = useDispatch();
  const { Option } = Select;
  useEffect(() => {
    dispatch(getCategoryAction());
  }, []);

  const { categoriesCourses } = useSelector(
    (state) => state.getCategoriesCourses
  );

  const [values, setValue] = useState({
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: 0,
    danhGia: 0,
    hinhAnh: "",
    maNhom: "GP01",
    ngayTao: "",
    maDanhMucKhoaHoc: "BackEnd",
    taiKhoanNguoiTao: taiKhoan.taiKhoan,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };
 
  
  const handleChangeSelect = (value) => {
    setValue({
      ...values,
      maDanhMucKhoaHoc: value,
    });
  };

  const handleChangeSelect1 = (value) => {
    setValue({
      ...values,
      maNhom: value,
    });
  };
  const handleOnChangeDate = (e) => {
    let getDate = moment(e).format("DD/MM/YYYY");
    setValue({
      ...values,
      ngayTao: getDate,
    });
  };
  const fileChangedHandler = (e) => {
    const image = e.target.files[0];
    setValue({
      ...values,
      hinhAnh: image,
    });
  };

  const handleSubmit = (e) => {
    let frm = new FormData();
    for (let key in values) {
      frm.append(key, values[key]);
      console.log(key, values[key]);
    }
    dispatch(ThemKhoaHocAction(frm));
    // setIsSubmit(true);
    OnChecked(true)
   
  };

  return (
    <>
      <div>
        <div
          className="modal fade"
          id="themKhoaHoc"
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
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <p>
                          Mã khóa học <span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Eg BackEnd_01"
                          name="maKhoaHoc"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* Tên khóa học  */}
                    <div className="col-6">
                      <div className="form-group">
                        <p>
                          Tên khóa học <span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Eg Lập trình java"
                          name="tenKhoaHoc"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* Danh mục khóa học  */}
                    <div className="col-6 ">
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
                            // onChange={onChange}
                            // value="BackEnd"
                            name="maDanhMucKhoaHoc"
                            onChange={handleChangeSelect}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {categoriesCourses.map((category, index) => {
                              return (
                                <Option key={index} value={category.maDanhMuc}>
                                  {category.tenDanhMuc}
                                </Option>
                              );
                            })}
                          </Select>
                        </div>
                        <div className="ml-2">
                          <p>
                            Mã nhóm
                            <span style={{ color: "red" }}>*</span>
                          </p>
                          <Select
                            name="maNhom"
                            // value="GP01"
                            placeholder="GP01"
                            onChange={handleChangeSelect1}
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
                          Ngày tạo <span style={{ color: "red" }}>*</span>
                        </p>
                        <DatePicker
                          onChange={handleOnChangeDate}
                          format="DD/MM/YYYY"
                        />
                      </div>
                    </div>
                    {/* Mô tả khóa học  */}
                    <div className="col-6">
                      <p>
                        Mô tả <span style={{ color: "red" }}>*</span>
                      </p>
                      <textarea
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Mô tả khóa học của bạn"
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
                      <p>
                        Bí danh <span style={{ color: "red" }}>*</span>
                      </p>
                      <input
                        type="text"
                        name="biDanh"
                        className="form-control"
                        placeholder="Bí danh"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => {
                    setValue({
                      maKhoaHoc: "",
                      biDanh: "",
                      tenKhoaHoc: "",
                      moTa: "",
                      luotXem: 0,
                      danhGia: 0,
                      hinhAnh: "",
                      maNhom: "GP01",
                      ngayTao: "",
                      maDanhMucKhoaHoc: "BackEnd",
                      taiKhoanNguoiTao: taiKhoan.taiKhoan,
                    });
                  }}
                >
                  Hủy
                </button>
                <button
                  type="reset"
                  class="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Thêm khóa học
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Showtoast /> */}
    </>
  );
}
