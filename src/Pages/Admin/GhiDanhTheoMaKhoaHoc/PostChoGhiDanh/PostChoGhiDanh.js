import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { xacNhanKhTheoKH } from "../../../../Action/xacNhanKhTheoKH";
import {huyKHTheoKh} from "../../../../Action/huyKHTheoKh";
export default function PostGhiDanh({
  currentPages,
  pageSize,
  postPages,
  maKH,
  onChange,
}) {
  // console.log("Đã ghi danh", postPages);
  const lastPages = currentPages * pageSize;
  const firstPages = lastPages - pageSize;
  const postPage = postPages.slice(firstPages, lastPages);
  const maKhoaHoc = maKH;

  const dispatch = useDispatch();
  const [isAccept, setIsAccept] = useState(false);
  useEffect(() => {}, [isAccept]);
    
  return (
    <div>
      <table class="table mt-5 px-4 table-bordered p-4 table-custom">
        <thead>
          <tr>
            <th>Tài khoản</th>
            <th>Họ tên</th>

            <th>Bí danh</th>
            <th className="text-center">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {postPage.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.taiKhoan}</td>
                <td>{item.hoTen}</td>
                <td>{item.biDanh}</td>
                <td>
                  <button
                    className="btn btn-accept"
                    onClick={() => {
                      const values = { ...maKhoaHoc, taiKhoan: item.taiKhoan };
                      dispatch(xacNhanKhTheoKH(values));
                      setIsAccept(!isAccept);
                      onChange(!isAccept);
                    }}
                  >
                    <i className="fa fa-check mr-1"></i>Ghi Danh 1
                  </button>
                  <button
                    className="btn-cancel"
                    onClick={() => {
                        const values = { ...maKhoaHoc, taiKhoan: item.taiKhoan };
                        dispatch(huyKHTheoKh(values));
                          setIsAccept(!isAccept);
                          onChange(!isAccept)
                      }}
                  >
                    <i className="fa fa-times"></i> Hủy
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
