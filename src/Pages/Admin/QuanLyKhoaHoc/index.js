import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCoursesPaginationAction } from "../../../Action/danhSachKhoaHocAtion";
import { xoaKhoaHocAction } from "../../../Action/xoaKhoaHocAction";
import Pagination  from "../../../component/Pagination"
import ThemKhoaHoc from "./ThemKhoaHoc";
import SuaKhoaHoc from "./CapNhatKhoaHoc.js";
import "./quanlykh.scss";
import swal from "sweetalert";
export default function QuanLyKhoaHoc() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
 
  const onChanges = (pages) => {
    // console.log("pages", pages);
    setCurrentPage(pages);
  };
  const [isDeleted, setDeleted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState({
    searchText: "",
  });
  const [isParams , setIsParams] = useState("")
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setSearch({
      ...search,
      [name]: value,
    });
    // console.log(name , value);
  };

  const handleSubmit = () => {
   
  };
  // }
  const OnChecked = (value) => {
   
    setIsChecked(value);
    setTimeout(()=>{
      setIsChecked(false)
    } , 3000)
  }
  
  useEffect(() => {
    dispatch(getCoursesPaginationAction(currentPage));
   
  }, [isDeleted, isChecked , currentPage]);
  const { coursesListPagination } = useSelector((state) => state.getCoursesList);

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
              {/* <button onClick={()=>{
                  history.push("/admin/courses-management/themkhoahoc")
              }} className=" btn btn-add">Thêm khóa học</button> */}
              <button
                type="button"
                className=" btn btn-add"
                data-toggle="modal"
                data-target="#themKhoaHoc"
              >
                Thêm khóa học
              </button>
            </div>
            <div className="col-4"></div>
            <div className="col-6 ">
              <div className="form-inline  ml-3">
                <div className="input-group  input-group--cusstom input-group-sm">
                  <input
                    name="searchText"
                    // value={search.searchText}
                    onChange={handleChange}
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Nhập tên khóa học...."
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-navbar"
                      onClick={handleSubmit}
                      type="submit"
                    >
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
              </div>
            </div>
          </div>
          {/* /.row */}
          <div className="row px-3 mt-2  ">
            <table className="table table-bordered table-custom">
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
                {coursesListPagination?.items?.map((item, index) => {
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
                      <td>
                        <button
                          className="btn-accept mr-2"
                          onClick={() => {
                            history.push(
                              `/admin/courses-management/ghidanh/makhoahoc=${item.maKhoaHoc}`
                            );
                          }}
                        >
                          <i className="fa fa-check mr-1"></i>Ghi danh
                        </button>
                        {/* <button 
                        // onClick={()=>{
                        //    history.push(`/admin/courses-management/capnhatkhoahoc/maKhoahoc=${item.maKhoaHoc}`)
                        //  }} 
                        type="button"
                        data-toggle="modal"
                        data-target="#suakhoahoc"
                         className="btn-update mr-2">
                         <i className="fa fa-share mr-1"></i> Cập nhập 
                          </button> */}
                        <button
                          type="button"
                          className="btn-update mr-2"
                          data-toggle="modal"
                          data-target="#suakhoahoc"
                          onClick={()=>{
                            setIsParams(item.maKhoaHoc)

                          }}
                        >
                          <i className="fa fa-share mr-1"></i> Cập nhập
                        </button>
                        <button
                          className="btn-cancel mr-3"
                          onClick={() => {
                            swal({
                              title: "Bạn có chắc muôn xóa?",
                              text: "",
                              icon: "warning",
                              buttons: true,
                              dangerMode: true,
                            }).then((willDelete) => {
                              if (willDelete) {
                                dispatch(xoaKhoaHocAction(item.maKhoaHoc));
                               
                                setDeleted(!isDeleted);
                              } else {
                                swal("");
                              }
                            });
                          }}
                        >
                          <i className="fa fa-trash"></i> Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            
          </div>
        </div>
        <div className="pagination">
              <Pagination
                currentPage={currentPage}
                pageSize={2}
                totalCount={7}
                onChange={onChanges}
              />
            </div>
        {/* /.container-fluid */}
      </div>
      <ThemKhoaHoc OnChecked={OnChecked}  />
      <SuaKhoaHoc isParams={isParams} />
    </div>
  );
}
