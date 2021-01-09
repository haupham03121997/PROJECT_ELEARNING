import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { huyKHTheoKh } from "../../../Action/huyKHTheoKh";
import { Table, Pagination } from "antd";
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

  const [isAccept, setIsAccept] = useState(false);

  useEffect(() => {
    dispatch(DSKHDaGhiDanh(value));
    dispatch(DSKHChoGhiDanh(value));
    dispatch(DSKHChuaGhiDanh(match.params.taiKhoan));
  }, [isAccept]);

  const { dsKHDaXetDuyet } = useSelector((state) => state.dsGhiDanhKhReducer);

  const { dsKHChuaXetDuyet } = useSelector((state) => state.dsGhiDanhKhReducer);

  const { dsKHChoXetDuyet } = useSelector((state) => state.dsGhiDanhKhReducer);
  const columns = [
    // { title: "STT", dataIndex: "length", key: "length" },
    { title: "Mã khóa học", dataIndex: "maKhoaHoc", key: "taiKhoan" },
    { title: "Bí danh", dataIndex: "biDanh", key: "biDanh" },
    {
      title: "Thao tác",
      dataIndex: "",
      key: "x",
      render: (text, record) => <a>Delete</a>,
    },
  ];
  // const data = [
  //   {
  //     key: 1,
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  //   },
  //   {
  //     key: 2,
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  //   },
  //   {
  //     key: 3,
  //     name: 'Not Expandable',
  //     age: 29,
  //     address: 'Jiangsu No. 1 Lake Park',
  //     description: 'This not expandable',
  //   },
  //   {
  //     key: 4,
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  //   },
  // ];
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
      {/* <Table
        columns={columns}
       
        dataSource={dsKHChuaXetDuyet}
      /> */}
      {/* <Table columns={columns} dataSource={dsKHChuaXetDuyet} /> */}
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
                  <th>STT</th>
                  <th>Mã khóa học</th>
                  <th>Bí danh</th>
                  <th>Thao tác</th>
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
                        <button
                          className="btn-ghidanh"
                          onClick={() => {
                            const values = {
                              ...taiKhoan,
                              maKhoaHoc: courses.maKhoaHoc,
                            };
                            dispatch(xacNhanKhTheoKH(values));
                            setIsAccept(!isAccept);
                          }}
                        >
                          Ghi danh
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
            id="daghidanh"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <table class="table mt-5">
              <thead
                // style={{ display: dsKHDaXetDuyet.length ? "block" : "none" }}
              >
                <tr style={{ color: "#238BAA" }}>
                  <th>STT</th>
                  <th>Mã khóa học</th>
                  <th>Tên khóa học</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {dsKHDaXetDuyet.length ? (
                  <>
                    {dsKHDaXetDuyet.map((courses, index) => {
                      return (
                        <tr key={index}>
                          <td>{index++}</td>
                          <td>{courses.maKhoaHoc}</td>
                          <td>{courses.tenKhoaHoc}</td>
                          <td>
                            <button
                              className="btn-cancle ml-3"
                              onClick={() => {
                                const values = {
                                  ...taiKhoan,
                                  maKhoaHoc: courses.maKhoaHoc,
                                };
                                dispatch(huyKHTheoKh(values));
                                setIsAccept(!isAccept);
                              }}
                            >
                              <i className="fa fa-trash mr-1"></i>Hủy
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  "Chưa có khóa học nào đã xét duyệt!"
                )}
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
