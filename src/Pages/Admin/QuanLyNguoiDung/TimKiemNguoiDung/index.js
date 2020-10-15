import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachUser } from "../../../../Action/layDanhSachUserAdmin";
import "./timkiem.scss";
import Post from "../Post/Post";
import Pagination from "../Paginnation/Pagination";
export default function TimKiemNguoiDung(props) {
 
  const { match } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  // const [pages , setPages] = useState([])
  const [currentPages, setCurrentPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const onChange = (pages) => {
    setCurrentPages(pages);
    console.log("pages", pages);
  };
  
  const search = match.params.seacrh;
  useEffect(() => {
    dispatch(layDanhSachUser());
  }, []);

  const { userAll } = useSelector((state) => state.listUserAll);
  const arrSearchUser = userAll.filter((user) => {
    return user.hoTen.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

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
              <Post
                currentPages={currentPages}
                pageSize={pageSize}
                postPages={arrSearchUser}
              />
              <div>
                <button 
                onClick={()=>{
                  history.push("/admin/user-management")
                }} 
                className="btn btn-success">Quay Lại</button>
                <div className="text-right">
                  <Pagination
                    currentPage={currentPages}
                    pageSize={pageSize}
                    totalCount={arrSearchUser.length}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
