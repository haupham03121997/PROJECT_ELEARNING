import React from "react";

export default function pagination({ currentPages, pageSize, postPages ,onChange }) {
  const lastPages = currentPages * pageSize;
  const firstPages = lastPages - pageSize;
  const postPage = postPages.slice(firstPages, lastPages);

  // console.log("onChange" ,onChange);
  return (
    <div>
      <table class="table mt-5 px-4 table-bordered p-4 table-custom">
        <thead>
          <tr>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th className="text-center">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {postPage.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.taiKhoan}</td>
                <td>{item.hoTen}</td>
                <td>{item.email}</td>
                <td>{item.soDT}</td>
                <td>
                  <button className="btn btn-accept" onClick={()=>{
                    // onChange(item.taiKhoan)
                  }}>
                    <i className="fa fa-check mr-1"></i>Ghi Danh
                  </button>
                  <button className="btn btn-update">
                    <i className="fa fa-share mr-1"></i>Cập nhật
                  </button>
                  <button className="btn btn-cancel">
                    <i className="fa fa-trash-alt mr-1"></i>Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
