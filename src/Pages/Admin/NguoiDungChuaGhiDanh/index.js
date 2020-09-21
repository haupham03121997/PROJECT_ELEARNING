import React,{useEffect} from 'react'
import {useSelector ,useDispatch} from "react-redux";
import {getCoursesAction} from "../../../Action/danhSachKhoaHocAtion.js";
import {useHistory} from "react-router-dom"
export default function NguoiDungChuaGhiDanh() {

    const dispatch = useDispatch();
const history = useHistory();
    useEffect(()=>{
        dispatch(getCoursesAction());
    } ,[])
    const {coursesList} = useSelector(state => state.getCoursesList);
    console.log(coursesList);
    return (
        <div className="content-wrapper management-user">
        {/* Content Header (Page header) */}
  
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">
                  Kết quả của tìm kiếm  "
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
                <ul>{coursesList.map((item , index)=>{
                    return(
                        <li key={index}>
                            <a onClick={()=>{
                                history.push(`/admin/user-management/hihihi/${item.maKhoaHoc}`)
                            }}  >{item.tenKhoaHoc}</a>
                        </li>
                    )
                })}</ul>
                <div>
                  <button className="btn btn-success">Quay Lại</button>
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
    )
}
