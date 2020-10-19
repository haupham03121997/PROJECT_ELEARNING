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
import Lienhe from "./Pages/LienHe";
import KhoaHoc from "./Pages/KhoaHoc";

import ThongTinTaiKhoan from "./Pages/ThongTinTaiKhoan";
import AdminRouter from "./component/AdminRouter";
import QuanLyNguoiDung from "./Pages/Admin/QuanLyNguoiDung";
// import DoiMatKhau from "./Pages/DoimatKhau";
import GhiDanh from "./Pages/Admin/GhiDanhTheoMaKhoaHoc";
import ThemNguoiDung from "./Pages/Admin/ThemUser";
import TimKiemNguoiDung from "./Pages/Admin/QuanLyNguoiDung/TimKiemNguoiDung";
import TimKiemKhoaHocAdmin from "./Pages/Admin/TimKiemKhoaHoc/TimKhoaHocAdmin";
import TrangChu from "./Pages/Admin/TrangChu";

import CustomRouter from "./component/CustomRoter";
import RouterTaiKhoan from "./component/RouterTaiKhoan";
import TaiKhoan from "./Pages/TaiKhoan";
import DoimatKhau from "./Pages/ChangePassword";
import QuanLyKhoaHoc from "./Pages/Admin/QuanLyKhoaHoc";
import ThemKhoaHoc from "./Pages/Admin/ThemKhoaHoc";
import ThemKhoaHocTest from "./Pages/Admin/ThemKhoaHocTest";

import GhiDanhTheoKhoaHoc from "./Pages/Admin/GhiDanhTheoMaKhoaHoc";
import GhiDanhTheoTaiKhoan from "./Pages/Admin/GhiDanhTheoTaiKhoan";
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
        {/* <AdminRouter
          exact
          path="/admin/user-management/nguoidung/:seacrh"
          component={TimKiemNguoiDung}
        /> */}
        {/* 
        <AdminRouter
          path="/admin/user-management/ghidanh/taiKhoan/:taiKhoan"
          component={GhiDanh}
        /> */}
        <AdminRouter path="/admin/index" component={TrangChu} />
        <AdminRouter
          path="/admin/courses-management/ghidanh/makhoahoc=:maKhoaHoc"
          component={GhiDanhTheoKhoaHoc}
        />
        <AdminRouter
          path="/admin/user-management/ghidanh/taikhoan/:taiKhoan"
          component={GhiDanhTheoTaiKhoan}
        />
        {/* <AdminRouter
          exact
          path="/admin/user-management/capnhatnguoidung/taikhoan/:obj"
          component={CapNhatNguoiDung}
        /> */}
        {/* <AdminRouter path="/admin/courses-management/capnhatkhoahoc/maKhoahoc=:maKhoaHoc"  component={CApNhatKhoaHoc}/> */}
        <AdminRouter
          path="/admin/user-management/timkhoahoc/khoahoc/:makh"
          component={TimKiemKhoaHocAdmin}
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
          component={ThemKhoaHocTest}
        />
        <AdminRouter
          path="/admin/courses-management"
          component={QuanLyKhoaHoc}
        />
        <UserRouter
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
        <UserRouter path="/lienhe" component={Lienhe} />
        <UserRouter path="/khoahoc" component={KhoaHoc} />
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
