import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { layDanhSachNguoiDungAction } from "../../../Action/layDanhSachNguoiDungAction";
import { layDanhSachUser } from "../../../Action/layDanhSachUserAdmin";
import { xoaNguoiDung } from "../../../Action/xoaNguoiDungAction";
import ThemNguoiDung from "./themNguoiDung";
import Capnhatnguoidung from "./Capnhatnguoidung";
import { Pagination } from 'antd';
// import { Button } from "reactstrap";
import swal from "sweetalert";

export default function QuanLyNguoiDung(props) {
  // const { match } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSeaarch] = useState({
    searchTxt: "",
  });
  const [isParams, setIsParam] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleted, setDeleted] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [arrListed, setArrList] = useState([]);
  const onChanges = (pages) => {
    console.log("pages", pages);
    setCurrentPage(pages);
  };
  useEffect(() => {
    dispatch(layDanhSachUser());
  }, []);
  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction(currentPage));
  }, [currentPage, isDeleted, isCheck]);
  console.log("isDeleted", isDeleted);
  const { userList } = useSelector((state) => state.getUserList);
  const { userAll } = useSelector((state) => state.listUserAll);

  const handleSubmitSearch = () => {
    // history.push(`/admin/user-management/nguoidung/${search.searchTxt}`);
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setSeaarch({
      ...search,
      [name]: value,
    });

    const arrList = userAll.filter((user) => {
      return user.hoTen.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    setArrList(arrList);
  };

  const isChecked = (checked) => {
    setIsCheck(checked);
  };
  return (
    <div className="content-wrapper management-user">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 px-0">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Quản Lý Người Dùng</h1>
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
            <div className="col-2">
              {/* <button
                onClick={() => {
                  history.push("/admin/themnguoidung");
                }}
                className=" btn btn-add"
              >
            
              </button> */}
              <button
                type="button"
                className=" btn btn-add"
                data-toggle="modal"
                data-target="#themnguoidung"
              >
                Thêm người dùng
              </button>
            </div>
            <div className="col-4"></div>
            <div className="col-6">
              <form className="form-inline ml-3">
                <div className="input-group input-group--cusstom input-group-sm">
                  <input
                    name="searchTxt"
                    value={search.searchTxt}
                    onChange={handleChange}
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Nhập tên người dùng...."
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button
                      // onClick={handleSubmit}
                      onClick={handleSubmitSearch}
                      className="btn btn-navbar"
                      type="button"
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
              </form>
            </div>
          </div>
          {/* /.row */}
          <div className="row mt-2  ">
            <div className="col-12">
              {search.searchTxt ? (
                <table className="table table-bordered table-custom">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tài khoản</th>
                      {/* <th>Mật khẩu</th> */}
                      <th>Họ tên</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
                      <th className="text-center">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {" "}
                    {arrListed.map((user, index) => {
                      return (
                        <tr key={index} style={{ cursor: "pointer" }}>
                          <td>{(currentPage - 1) * 10 + index + 1}</td>
                          <td>{user.taiKhoan}</td>
                          <td>{user.hoTen}</td>
                          <td>{user.email}</td>
                          <td>{user.soDt}</td>
                          <td>
                            <button
                              className="btn-accept mr-2"
                              onClick={() => {
                                history.push(
                                  `/admin/user-management/ghidanh/taikhoan/${user.taiKhoan}`
                                );
                              }}
                            >
                              <i className="fa fa-check mr-1"></i> Ghi danh
                            </button>
                            {/* <button
                              onClick={() => {
                                history.push(
                                  `/admin/user-management/capnhatnguoidung/taikhoan/${user.taiKhoan}`
                                );
                              }}
                              className="btn-update mr-2"
                            >
                              <i className="fa fa-share mr-1"></i> Cập nhật
                            </button> */}
                            <button
                              type="button"
                              className="btn-update mr-2"
                              data-toggle="modal"
                              data-target="#capnhatuser"
                              onClick={() => {
                                dispatch();
                              }}
                            >
                              <i className="fa fa-share mr-1"></i> Cập nhật
                            </button>
                            {user.maLoaiNguoiDung === "GV" ? (
                              ""
                            ) : (
                              <button
                                className="btn-cancel"
                                onClick={() => {
                                  swal({
                                    title: "Bạn có chắc muôn xóa?",
                                    text: "",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                  }).then((willDelete) => {
                                    if (willDelete) {
                                      dispatch(xoaNguoiDung(user.taiKhoan));
                                      setDeleted(!isDeleted);
                                      // swal("Xóa thành công!", {
                                      //   icon: "success",
                                      // });
                                    } else {
                                      swal("");
                                    }
                                  });
                                }}
                              >
                                <i className="fa fa-trash mr-1"></i>Xóa
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <table className="table table-bordered table-custom">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tài khoản</th>
                      {/* <th>Mật khẩu</th> */}
                      <th>Họ tên</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
                      <th className="text-center">Thao tác</th>
                    </tr>
                  </thead>

                  <tbody>{}</tbody>

                  <tbody>
                    {userList?.items?.map((item, index) => {
                      return (
                        <tr key={index} style={{ cursor: "pointer" }}>
                          <td>{(currentPage - 1) * 10 + index + 1}</td>
                          <td>{item.taiKhoan}</td>
                          <td>{item.hoTen}</td>
                          <td>{item.email}</td>
                          <td>{item.soDT}</td>
                          <td>
                            <button
                              className="btn-accept mr-2"
                              onClick={() => {
                                history.push(
                                  `/admin/user-management/ghidanh/taikhoan/${item.taiKhoan}`
                                );
                              }}
                            >
                              <i className="fa fa-check mr-1"></i> Ghi danh
                            </button>
                            {/* <button
                              onClick={() => {
                                history.push(
                                  `/admin/user-management/capnhatnguoidung/taikhoan/${item.taiKhoan}`
                                );
                              }}
                              className="btn-update mr-2"
                            >
                              <i className="fa fa-share mr-1"></i> Cập nhật
                            </button> */}
                            <button
                              type="button"
                              className="btn-update mr-2"
                              data-toggle="modal"
                              data-target="#capnhatuser"
                              onClick={() => {
                                setIsParam(item.taiKhoan);
                              }}
                            >
                              <i className="fa fa-share mr-1"></i> Cập nhật
                            </button>
                            {item.maLoaiNguoiDung === "GV" ? (
                              ""
                            ) : (
                              <button
                                className="btn-cancel"
                                onClick={() => {
                                  swal({
                                    title: "Bạn có chắc muôn xóa?",
                                    text: "",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                  }).then((willDelete) => {
                                    if (willDelete) {
                                      dispatch(xoaNguoiDung(item.taiKhoan));
                                      setDeleted(!isDeleted);
                                      // swal("Xóa thành công!", {
                                      //   icon: "success",
                                      // });
                                    } else {
                                      swal("");
                                    }
                                  });
                                }}
                              >
                                <i className="fa fa-trash mr-1"></i>Xóa
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
              {arrListed.length ? <></> : <></>}
            </div>
          </div>

          {/* <Pagination
            currentPage={currentPage}
            pageSize={8}
            totalCount={userList.totalCount}
            onChange={onChanges}
          /> */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* */}
      {/* /.content */}
      <ThemNguoiDung isChecked={isChecked} />
      <Capnhatnguoidung  isChecked={isChecked} isParams={isParams} />
      <Pagination defaultCurrent={currentPage}  onChange={onChanges} total={userList.totalCount} />
    </div>
  );
}
