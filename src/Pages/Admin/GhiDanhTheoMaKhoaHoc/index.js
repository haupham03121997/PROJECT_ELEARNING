import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  DSNguoiDungChoXetDuyetTHeoKhoaHoc,
  DSNguoiDungDaGhiDanhTheoKhoaHoc,
  DSNguoiDungChuaGhiDanhTheoKhoaHoc,
} from "../../../Action/dsGhiDanhTheoKH";
import {xacNhanKhTheoKH} from "../../../Action/xacNhanKhTheoKH";
import {huyKHTheoKh} from "../../../Action/huyKHTheoKh";
import Pagination from "../QuanLyNguoiDung/Paginnation/Pagination";
import PostGhiDanh from "./PostGhiDanh/PostGhiDanh";
import Pagin from "../QuanLyNguoiDung/Paginnation/Pagination";
import swal from "sweetalert";
import "./index.scss";

export default function GhiDanhTheoKhoaHoc(props) {
  const { match } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const makh = { maKhoaHoc: match.params.maKhoaHoc };

  const [isAccept , setIsAccept] = useState(false);
  const [currentPages, setCurrentPages] = useState(1);
  const [pageSize, setPageSize] = useState(7);
  const onChange = (pages) => {
    setCurrentPages(pages);
  };
  useEffect(() => {
    dispatch(DSNguoiDungChoXetDuyetTHeoKhoaHoc(makh));
    dispatch(DSNguoiDungDaGhiDanhTheoKhoaHoc(makh));
    dispatch(DSNguoiDungChuaGhiDanhTheoKhoaHoc(makh));
  }, [isAccept]);
  const { hvChoXetDuyet } = useSelector((state) => state.dsGhiDanhTheoKH);
  const { hdDaXetDuyet } = useSelector((state) => state.dsGhiDanhTheoKH);
  const { hvChuaXetDuyet } = useSelector((state) => state.dsGhiDanhTheoKH);
  // console.log("hvChoXetDuyet", hdDaXetDuyet);
  const onChangeIsAccept = (isAccept) =>{
  
    setIsAccept(!isAccept)
  }
  return (
    <div className="content-wrapper management-user">
      <h4 className="display-4">Danh sách ghi danh người dùng</h4>
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#dschuaghidanh"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Danh sách chưa ghi danh
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#dsdaghidanh"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Danh sách đã ghi danh
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#dschoxetduyet"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Danh sách chờ xét duyệt
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane px-4 fade show active"
            id="dschuaghidanh"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <PostGhiDanh
              maKH={makh}
              currentPages={currentPages}
              pageSize={pageSize}
              postPages={hvChuaXetDuyet}
              onChange ={onChangeIsAccept}
            />
            <Pagin

              currentPage={currentPages}
              pageSize={pageSize}
              totalCount={hvChuaXetDuyet.length}
              onChange={onChange}
            />
          </div>
          <div
            style={{ height: "460px" }}
            className="tab-pane px-4  fade"
            id="dsdaghidanh"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <table className="table mt-5 px-4 table-bordered p-4 table-custom">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tài khoản</th>
                  <th>Bí danh</th>
                  <th>Họ tên</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {hdDaXetDuyet.map((hv, index) => {
                  return (
                    <tr key="index">
                      <td>{index++}</td>
                      <td>{hv.taiKhoan}</td>
                      <td>{hv.biDanh}</td>
                      <td>{hv.hoTen}</td>
                      <td>

                      <button className="btn-cancel"  onClick={()=>{
                           swal({
                            title: "Xóa khóa học này?",
                            text: "",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                          .then((willDelete) => {
                            if (willDelete) {
                              const values = {...makh , taiKhoan : hv.taiKhoan}
                              dispatch(
                                huyKHTheoKh(values)
                              )
                              
                              swal("Xóa thành công!", {
                               icon: "success",
                                
                              });
                              setIsAccept(!isAccept)
                            
                            } else {
                              swal("Hủy xóa");
                            }
                          });
                           
                        }}>
                          <i className="fa fa-times"></i> Hủy
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane px-4 fade"
            id="dschoxetduyet"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <table className="table mt-5 px-4 table-bordered p-4 table-custom">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tài khoản</th>
                  <th>Bí danh</th>
                  <th>Họ tên</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {hvChoXetDuyet.map((hv, index) => {
                  return (
                    <tr key="index">
                      <td>{index++}</td>
                      <td>{hv.taiKhoan}</td>
                      <td>{hv.biDanh}</td>
                      <td>{hv.hoTen}</td>
                      <td>
                        <button onClick={()=>{
                                const values = { ...makh ,taiKhoan : hv.taiKhoan}
                                  dispatch(xacNhanKhTheoKH(values))
                                  setIsAccept(!isAccept)
                        }} className="btn-accept">
                          
                          <i className="fa fa-check"></i> Xác nhận
                        </button>
                        <button className="btn-cancel"  onClick={()=>{
                          swal({
                            title: "Xóa khóa học này?",
                            text: "",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                          .then((willDelete) => {
                            if (willDelete) {
                              const values = {...makh , taiKhoan : hv.taiKhoan}
                              dispatch(
                                huyKHTheoKh(values)
                              )
                              
                              swal("Xóa thành công!", {
                                icon: "success",
                                
                              });
                              setIsAccept(!isAccept)
                            
                            } else {
                              swal("Hủy xóa");
                            }
                          });
                           
                        }}>
                          <i className="fa fa-times"></i> Hủy
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
