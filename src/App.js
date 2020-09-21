import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";
import { BrowserRouter, Switch } from "react-router-dom";

import UserRouter from "./component/UserRouter";
import Home from "./Pages/CoursesList";
import DanhMucKhoaHoc from "./Pages/DanhMucKhoaHoc";
import TimKiemKhoaHoc from "./Pages/TimKiemKhoaHoc";
import CoursesDetail from "./Pages/CoursesDetail";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

import ThongTinTaiKhoan from "./Pages/ThongTinTaiKhoan";
import AdminRouter from "./component/AdminRouter";
import QuanLyNguoiDung from "./Pages/Admin/QuanLyNguoiDung";
// import DoiMatKhau from "./Pages/DoimatKhau";
import NguoiDungChuaGhiDanh from "./Pages/Admin/NguoiDungChuaGhiDanh";
import ThemNguoiDung from "./Pages/Admin/ThemUser";
import TimKiemNguoiDung from "./Pages/Admin/TimKiemNguoiDung";
import CapNhatNguoiDung from "./Pages/Admin/CapnhatNguoiDung";

import CustomRouter from "./component/CustomRoter";
import RouterTaiKhoan from "./component/RouterTaiKhoan";
// import ChiTietKhoaHoc from "./Pages/ChiTietKhoaHoc";
import NguoiDungTest from "./Pages/Admin/NguoiDungChuaGhiDanhTest";
import TaiKhoan from "./Pages/TaiKhoan";
import DoimatKhau from "./Pages/ChangePassword";
import QuanLyKhoaHoc from "./Pages/Admin/QuanLyKhoaHoc";
import ThemKhoaHoc from "./Pages/Admin/ThemKhoaHoc";
// import GhiDanhKhocHocTheoMaKH from "./Pages/Admin/ghiDanhTheoMa";
// import DanhSachHocVienChoXetDuyet from "./Pages/Admin/DanhSachHocVienChoXetDuyet";

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
          path="/admin/user-management/ghidanh"
          component={NguoiDungChuaGhiDanh}
        />
        <AdminRouter
          path="/admin/user-management/hihihi/:maKhoaHoc"
          component={NguoiDungTest}
        />
        <AdminRouter
          exact
          path="/admin/user-management/capnhatnguoidung/taikhoan/:taiKhoan"
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
        <AdminRouter
          path="/admin/courses-management/themkhoahoc"
          component={ThemKhoaHoc}
        />
        <AdminRouter
          path="/admin/courses-management"
          component={QuanLyKhoaHoc}
        />
        <CustomRouter
          path="/DanhMucKhoaHoc/:maDanhMucKhoaHoc"
          component={DanhMucKhoaHoc}
        />
        <CustomRouter
          path="/TimKiemKhoaHoc/:makhoahoc"
          component={TimKiemKhoaHoc}
        />
        <RouterTaiKhoan
          path="/caidat/taikhoan/doimatkhau/:taiKhoan"
          component={DoimatKhau}
        />
        <RouterTaiKhoan path="/caidat/taikhoan" component={TaiKhoan} />

        <CustomRouter path="/Dangky" component={Signup} />
        <CustomRouter path="/DangNhap" component={Signin} />
        <UserRouter path="/ThongTinTaiKhoan" component={ThongTinTaiKhoan} />
        {/* <UserRouter path="/TaiKhoan/DoiMatKhau" component={DoiMatKhau} /> */}

        <UserRouter
          path="/ChiTietKhoaHoc/:maKhoaHoc"
          component={CoursesDetail}
        />
        {/* <UserRouter
          
        /> */}
        <UserRouter path="/:maDanhMucKhoaHoc" component={Home} />
        <UserRouter path="/:maDanhMuc" component={Home} />
        <UserRouter path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
