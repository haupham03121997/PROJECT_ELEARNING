import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCoursesAction } from "../../../Action/danhSachKhoaHocAtion";
export default function QuanLyKhoaHoc() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCoursesAction());
  }, []);
  const { coursesList } = useSelector((state) => state.getCoursesList);
  console.log(coursesList);
  return (
    <div className="content-wrapper management-user">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Quản Lý Khóa Học</h1>
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 ">
              <button onClick={()=>{
                  history.push("/admin/courses-management/themkhoahoc")
              }} className="ml-3 btn btn-success">Thêm khóa học</button>
            </div>
            <div className="col-4"></div>
            <div className="col-6">
              <form className="form-inline ml-3">
                <div className="input-group input-group--cusstom input-group-sm">
                  {/* <input
                  
                    name="searchTxt"
                    value={search.searchTxt}
                    onChange={handleChange}
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Nhập tên người dùng...."
                    aria-label="Search"
                  /> */}
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                  {/* <div className="result-search">
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>3</li>
                    </ul>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
          {/* /.row */}
          <div className="row mt-5 border rounded">
            <table class="table">
              <thead>
                <tr>
                  <th>Mã khóa học</th>
                  <th>Hình ảnh</th>
                  <th>Tên khóa học</th>
                  <th>Người tạo</th>
                  <th>Ngày tạo</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {coursesList.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.maKhoaHoc}</td>
                      <td>
                        <img
                          style={{ width: "60px" }}
                          src={item.hinhAnh}
                          alt={item.biDanh}
                        />
                      </td>
                      <td>{item.tenKhoaHoc}</td>
                      <td>{item.nguoiTao.hoTen}</td>
                      <td>{item.ngayTao}</td>
                      <td> <button className="btn btn-success mr-3" 
                            
                          >
                            Cập nhập khóa học
                          </button>

                          <button className="btn btn-danger mr-3" 
                            
                          >
                            Xóa khóa học
                          </button>
                          </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>

      {/* /.content */}
      {/* <div className="text-right">
        <Pagination
          currentPage={currentPage}
          pageSize={10}
          totalCount={250}
          onChange={
            // dispatch(NextPagesAtion(pages))
            onChange
          }
        />
      </div> */}
    </div>
  );
}
