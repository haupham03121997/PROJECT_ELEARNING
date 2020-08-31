import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";
import { BrowserRouter, Switch, Router, Link } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import UserRouter from "./component/UserRouter";
import Home from "./Pages/CoursesList";
import DanhMucKhoaHoc from "./Pages/DanhMucKhoaHoc";
import TimKiemKhoaHoc from "./Pages/TimKiemKhoaHoc";
import CoursesDetail from "./Pages/CoursesDetail";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import { useDispatch } from "react-redux";
import { Login } from "./Action/User";
import ThongTinTaiKhoan from "./Pages/ThongTinTaiKhoan";
import AdminRouter from "./component/AdminRouter";
import QuanLyNguoiDung from "./Pages/Admin/QuanLyNguoiDung";
import DoiMatKhau from "./Pages/DoimatKhau";
import QuanLyKhoaHoc from "./Pages/Admin/QuanLyKhoaHoc";
import ThemNguoiDung from "./Pages/Admin/ThemUser";
import TimKiemNguoiDung from "./Pages/Admin/TimKiemNguoiDung";
import CapNhatNguoiDung from "./Pages/Admin/CapnhatNguoiDung";

function App() {
  // const dispatch = useDispatch();
  // const getCredentialFromLocal = () => {
  //   const credentialStr = localStorage.getItem("userLogin");
  //   console.log("credentialStr", credentialStr);
  //   if (credentialStr) {
  //     dispatch(Login(JSON.parse(credentialStr)));
  //   }
  // }
  // useEffect(() => {
  //   getCredentialFromLocal();
  //   console.log("getCredentialFromLocal");
  // }, [])
  console.log("render");
  return (
    <BrowserRouter>
      <Switch>
       
        <AdminRouter
          exact
          path="/admin/user-management/nguoidung/:seacrh"
          component={TimKiemNguoiDung}
        />
         <AdminRouter
          exact
          path="/admin/user-management/capnhatnguoidung/taikhoan:taiKhoan"
          component={CapNhatNguoiDung}
        />
        <AdminRouter
          path="/admin/user-management"
          component={QuanLyNguoiDung}
        />
        
        <AdminRouter
          exact
          path="/admin/themnguoidung"
          component={ThemNguoiDung}
        />

        <UserRouter path="/ThongTinTaiKhoan" component={ThongTinTaiKhoan} />
        <UserRouter path="/TaiKhoan/DoiMatKhau" component={DoiMatKhau} />
        <UserRouter path="/DangNhap" component={Signin} />
        <UserRouter path="/Dangky" component={Signup} />
        <UserRouter
          path="/TimKiemKhoaHoc/:makhoahoc"
          component={TimKiemKhoaHoc}
        />
        <UserRouter
          path="/ChiTietKhoaHoc/:maKhoaHoc"
          component={CoursesDetail}
        />
        <UserRouter
          path="/DanhMucKhoaHoc/:maDanhMucKhoaHoc"
          component={DanhMucKhoaHoc}
        />
        <UserRouter path="/:maDanhMucKhoaHoc" component={Home} />
        <UserRouter path="/:maDanhMuc" component={Home} />
        <UserRouter path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
