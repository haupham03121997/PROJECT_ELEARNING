import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachUser } from "../../../Action/layDanhSachUserAdmin";
import './timkiem.scss'
export default function TimKiemNguoiDung(props) {
  const history = useHistory();
  const { match } = props;
  const dispatch = useDispatch();
  const search = match.params.seacrh;
  useEffect(() => {
    dispatch(layDanhSachUser());
  }, []);

  const { userAll } = useSelector((state) => state.listUserAll);
  // console.log("userList", userAll);

  const arrSearchUser = userAll.filter((user) => {
    return user.hoTen.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  console.log("arrSearchUser", arrSearchUser);
  return (
    <div className="content-wrapper management-user">
      {/* Content Header (Page header) */}

      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">
                Kết quả của tìm kiếm "{match.params.seacrh} "
              </h1>
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
            <div className="col-2"></div>
            <div className="col-4"></div>
            <div className="col-6">
              <form className="form-inline ml-3">
                {/* <div className="input-group input-group--cusstom input-group-sm"> */}
                {/* <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Tìm người dùng"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div> */}
                {/* </div> */}
              </form>
            </div>
          </div>
          {/* /.row */}
          <div className="row mt-5 border rounded">
            <div className="col-12">
              <table class="table">
                <thead>
                  <tr>
                    <th>Tài khoản</th>
                    {/* <th>Mật khẩu</th> */}
                    <th>Họ tên</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th className='text-center'>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {arrSearchUser.map((item, index) => {
                    return(
                      <tr key={index}>
                      <td>{item.taiKhoan}</td>
                      <td>{item.hoTen}</td>
                      <td>{item.email}</td>
                    <td>{item.soDt}</td>
                    <td>
                      <button className="btn btn-primary mr-2">Ghi danh</button>
                      <button className="btn btn-warning mr-2">Cập nhật</button>
                      <button className="btn btn-danger">Xóa</button>
                    </td>
                    </tr>
                    )
                  })}
                </tbody>
              </table>
              <div>
                <button className="btn btn-success">Quay Lại</button>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}
