import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  DSKHDaGhiDanh,
  DSKHChoGhiDanh,
  DSKHChuaGhiDanh,
} from "../../../Action/dsGhiDanhTheoTK";
import { xacNhanKhTheoKH } from "../../../Action/xacNhanKhTheoKH";

export default function GhiDanhTheoTaiKhoan(props) {
  const { match } = props;
  const dispatch = useDispatch();
  const value = { TaiKhoan: match.params.taiKhoan };
  const taiKhoan = { taiKhoan: match.params.taiKhoan };
  
  const [isAccept , setIsAccept ] = useState(false);

  useEffect(() => {
    dispatch(DSKHDaGhiDanh(value));
    dispatch(DSKHChoGhiDanh(value));
    dispatch(DSKHChuaGhiDanh(match.params.taiKhoan));
  }, [isAccept]);

  const { dsKHDaXetDuyet } = useSelector((state) => state.dsGhiDanhKhReducer);

  const { dsKHChuaXetDuyet } = useSelector((state) => state.dsGhiDanhKhReducer);

  const { dsKHChoXetDuyet } = useSelector((state) => state.dsGhiDanhKhReducer);
  // console.log("dsKHDaXetDuyet" ,dsKHDaXetDuyet);
  // console.log("dsKHChuaXetDuyet" ,dsKHChuaXetDuyet);

  // console.log("dsKHChoXetDuyet" ,dsKHChoXetDuyet);

  return (
    <div className="content-wrapper management-user">
      {/* <h4 className="display-4">
        <i className="fa fa-bookmark mr-2"></i>Danh sách khóa học
      </h4> */}
      <h5 className="mt-4">
        <i className="fa fa-user mr-2 "></i>
        {match.params.taiKhoan}
      </h5>
      <p className="my-3">
        Khóa học sẽ được tự động thêm vào khi người dùng đăng ký khóa học
      </p>

      <div className="mt-4">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#chuaghidanh"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Khóa học chưa ghi danh
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#daghidanh"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Khóa học đã ghi danh
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#choghidanh"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Khóa học chờ ghi danh
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="chuaghidanh"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <table class="table mt-5">
              <thead>
                <tr style={{ color: "#238BAA" }}>
                  <th scope="col">STT</th>
                  <th scope="col">Mã khóa học</th>
                  <th scope="col">Bí danh</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {dsKHChuaXetDuyet.map((courses, index) => {
                  return (
                    <tr key={index}>
                      <td>{index++}</td>
                      <td>{courses.maKhoaHoc}</td>
                      <td>{courses.biDanh}</td>
                      <td>
                        <button className="btn-ghidanh"
                         onClick={() => {
                          const values = {
                            ...taiKhoan,
                            maKhoaHoc: courses.maKhoaHoc,
                          };
                          dispatch(xacNhanKhTheoKH(values))
                          setIsAccept(!isAccept)

                        }}
                        >Ghi danh</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="daghidanh"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <table class="table mt-5">
              <thead>
                <tr style={{ color: "#238BAA" }}>
                  <th scope="col">STT</th>
                  <th scope="col">Mã khóa học</th>
                  <th scope="col">Tên khóa học</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {dsKHDaXetDuyet.map((courses, index) => {
                  return (
                    <tr key={index}>
                      <td>{index++}</td>
                      <td>{courses.maKhoaHoc}</td>
                      <td>{courses.tenKhoaHoc}</td>
                      <td>
                       
                        <button className="btn-cancle ml-3">
                          <i className="fa fa-trash mr-1"></i>Hủy
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="choghidanh"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {dsKHChoXetDuyet.length ? (
              <>
                {dsKHChoXetDuyet.map((courses, index) => {
                  return (
                    <tr key={index}>
                      <td>{index++}</td>
                      <td>{courses.maKhoaHoc}</td>
                      <td>{courses.tenKhoaHoc}</td>
                      <td>
                        <button className="btn-ghidanh">
                          <i className="fa fa-check-circle mr-2"></i>Ghi danh
                        </button>
                        <button className="btn-cancle ml-3">
                          <i className="fa fa-trash mr-1"></i>Hủy
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              "Không có khóa học nào!"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
