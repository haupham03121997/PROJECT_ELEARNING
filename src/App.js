import React from "react";
import "./App.css";
import "./scss/main.scss";
import { BrowserRouter, Switch } from "react-router-dom";

import UserRouter from "./component/UserRouter";
import AdminRouter1 from "./component/AdminRouter1";
import CustomRouter from "./component/CustomRoter";
import RouterTaiKhoan from "./component/RouterTaiKhoan";
import RouterShopping from "./component/RouterShopping";

import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Lienhe from "./Pages/LienHe";
import KhoaHoc from "./Pages/KhoaHoc";
import Home from "./Pages/CoursesList";
import TaiKhoan from "./Pages/TaiKhoan";
import ShopCart from "./Pages/ShopCart";
import TrangChu from "./Pages/Admin/TrangChu";
import DoimatKhau from "./Pages/ChangePassword";
import CoursesDetail from "./Pages/CoursesDetail";
import DanhMucKhoaHoc from "./Pages/DanhMucKhoaHoc";
import TimKiemKhoaHoc from "./Pages/TimKiemKhoaHoc";
import ThongTinTaiKhoan from "./Pages/ThongTinTaiKhoan";
import QuanLyKhoaHoc from "./Pages/Admin/QuanLyKhoaHoc";
import QuanLyNguoiDung from "./Pages/Admin/QuanLyNguoiDung";
import GhiDanhTheoKhoaHoc from "./Pages/Admin/GhiDanhTheoMaKhoaHoc";
import GhiDanhTheoTaiKhoan from "./Pages/Admin/GhiDanhTheoTaiKhoan";
import TimKiemKhoaHocAdmin from "./Pages/Admin/TimKiemKhoaHoc/TimKhoaHocAdmin";

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
  return (
    <BrowserRouter>
      <Switch>
        <AdminRouter1 path="/admin/index" component={TrangChu} />
        <AdminRouter1
          path="/admin/courses-management/ghidanh/makhoahoc=:maKhoaHoc"
          component={GhiDanhTheoKhoaHoc}
        />
        <AdminRouter1
          path="/admin/user-management/ghidanh/taikhoan/:taiKhoan"
          component={GhiDanhTheoTaiKhoan}
        />
        <AdminRouter1
          path="/admin/user-management"
          component={QuanLyNguoiDung}
        />

        <AdminRouter1
          path="/admin/user-management/timkhoahoc/khoahoc/:makh"
          component={TimKiemKhoaHocAdmin}
        />
        {/* 
       
       
       

       

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
        /> */}
        <AdminRouter1
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

        <RouterShopping path="/giohang" component={ShopCart} />

        <RouterTaiKhoan
          path="/caidat/taikhoan/doimatkhau/:taiKhoan"
          component={DoimatKhau}
        />
        <RouterTaiKhoan path="/caidat/taikhoan" component={TaiKhoan} />
        <CustomRouter path="/Dangky" component={Signup} />
        <CustomRouter path="/DangNhap" component={Signin} />
        <UserRouter path="/ThongTinTaiKhoan" component={ThongTinTaiKhoan} />
        <UserRouter path="/lienhe" component={Lienhe} />
        <UserRouter path="/khoahoc" component={KhoaHoc} />
        <UserRouter
          path="/ChiTietKhoaHoc/:maKhoaHoc"
          component={CoursesDetail}
        />
        <UserRouter path="/:maDanhMucKhoaHoc" component={Home} />
        <UserRouter path="/:maDanhMuc" component={Home} />
        <UserRouter path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
