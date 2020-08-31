import React from "react";

export default function CapNhatNguoiDung(props) {
  const { match } = props;
  console.log("match người dùng", match);
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
                // onClick={() => {
                //   history.push("/admin/user-management/TimKiemNguoiDung");
                // }}
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
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Tìm người dùng"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
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
              <div>
                {"{"}/* */{"}"}
                áhdakjhdakjhaskjdah
                <table className="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tài khoản</th>
                      <th>Mật khẩu</th>
                      <th>Họ tên</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}
