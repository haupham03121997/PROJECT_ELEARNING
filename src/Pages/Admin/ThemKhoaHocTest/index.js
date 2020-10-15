import React, { useEffect, useState } from "react";
import { Select, DatePicker, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../../Action/danhMucKhoaHocAction";
import { ThemKhoaHocAction } from "../../../Action/themKhoaHocAction";
import moment from "moment";

export default function ThemKhoaHoc() {
  const taiKhoan = JSON.parse(localStorage.getItem("userLogin"));
  const dispatch = useDispatch();
  const { Option } = Select;
  useEffect(() => {
    dispatch(getCategoryAction());
  }, []);

  const { categoriesCourses } = useSelector(
    (state) => state.getCategoriesCourses
  );
  const [isSubmit, setIsSubmit] = useState(false);
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
  const handleChangeSelect1 = (e) => {
    setValue({
      ...values,
      maDanhMucKhoaHoc: e,
    });
  };
  const handleChangeSelect2 = (e) => {
    setValue({
      ...values,
      maNhom: e,
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
    console.log("value ", values);
    let frm = new FormData();
    for (let key in values) {
      frm.append(key, values[key]);
    }
    dispatch(ThemKhoaHocAction(frm));
    // AddCourse(true);
    setIsSubmit(!isSubmit);
  };

  const OnChecked = (checked) => {
    // return checked  =isSubmit
    console.log("checked", checked);
  };

  return (
    <>
      <div className="content-wrapper management-user">
        <h1>Thêm khóa học</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p className="mb-1">
                  Mã khóa học <span style={{ color: "red" }}> *</span>
                </p>
                <input
                  type="text"
                  className="form-control"
                  name="maKhoaHoc"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p className="mb-1">
                  Tên khóa học <span style={{ color: "red" }}> *</span>
                </p>
                <input
                  type="text"
                  className="form-control"
                  name="tenKhoaHoc"
                  onChange={handleChange}
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
                />
              </div>
            </div>
           <div className="col-6">
           <div className="form-group">
              <p className="mb-1 ml-3">
                Mã danh mục <span style={{ color: "red" }}> *</span>
              </p>

              <Select
                //   defaultValue="lucy"
                style={{ marginLeft: "15px", width: 300 }}
                onChange={handleChangeSelect1}
                defaultValue="BackEnd"
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
           </div>
           <div className="col-6">
           <div className="form-group ml-4">
              <p className="mb-1">
                Mã nhóm <span style={{ color: "red" }}> *</span>
              </p>
              <Select
                defaultValue="GP01"
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
            </div>
          </div>
        </div>
      </div>

      {/* <Showtoast /> */}
    </>
  );
}
