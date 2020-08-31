import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { layDanhSachNguoiDungAction } from "../../../Action/layDanhSachNguoiDungAction";
import { xoaNguoiDung } from "../../../Action/xoaNguoiDungAction";
import Pagination from "../../../component/Pagination";
import swal from "sweetalert";
export default function QuanLyNguoiDung(props) {
  const { match } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSeaarch] = useState({
    searchTxt: "",
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    // console.log("Tìm Kiếm Người Dùng" , e);
    setSeaarch({
      ...search,
      [name]: value,
    });
    console.log(name, value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleted, setDeleted] = useState(false);
  const onChange = (pages) => {
    setCurrentPage(pages);
    console.log(pages);
    // setCurrentPage(0)
  };
  console.log("setDeleted", setDeleted);
  // console.log("currentPage", currentPage);
  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction(currentPage));
  }, [isDeleted, currentPage]);

  const { userList } = useSelector((state) => state.getUserList);
  // const { userList } = useSelector((state) => state.getUserList);
  // console.log("userList" , userList.currentPage);
  // const {userLists} = userList.;
  const currentPages = userList.currentPage;

  //  console.log("Kết quả nè " , cur) ;
  //  const pages = onChange();
  //  console.log("Kết quả nè" , pages);
  const handleSubmit = () => {
    history.push(`/admin/user-management/nguoidung/${search.searchTxt}`);
  };

  return (
    <div className="content-wrapper management-user">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
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
              <button
                onClick={() => {
                  history.push("/admin/themnguoidung");
                }}
                className="ml-3 btn btn-success"
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
                    placeholder="Tìm người dùng"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-navbar"
                      type="submit"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* /.row */}
          <div className="row mt-5 border rounded">
            <div className="col-12">
              <table class="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tài khoản</th>
                    {/* <th>Mật khẩu</th> */}
                    <th>Họ tên</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {userList?.items?.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        onClick={() => {
                          history.push(
                            `/admin/user-management/capnhatnguoidung/taikhoan:${item.taiKhoan}`
                          );
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <td>{(currentPage - 1) * 10 + index + 1}</td>
                        <td>{item.taiKhoan}</td>
                        <td>{item.hoTen}</td>
                        <td>{item.email}</td>
                        <td>{item.soDT}</td>
                        <td>
                          <button className="btn btn-success mr-3">
                            Ghi danh
                          </button>
                          <button className="btn btn-warning mr-3">Sửa</button>
                          {item.maLoaiNguoiDung === "GV" ? (
                            <button disabled className="btn btn-danger">
                              Không thể xóa
                            </button>
                          ) : (
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                setDeleted(!isDeleted);
                                dispatch(xoaNguoiDung(item.taiKhoan));
                              }}
                            >
                              Xóa
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>

      {/* /.content */}
      <Pagination
        currentPage={currentPage}
        pageSize={10}
        totalCount={250}
        onChange={
          // dispatch(NextPagesAtion(pages))
          onChange
        }
      />
    </div>
  );
}
