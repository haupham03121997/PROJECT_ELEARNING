import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
export default function ThongTinTaiKhoan() {
  const history =useHistory();
  // const dispatch = useDispatch();
  // const { credential } = useSelector((state) => state.UserReducer);

  return (
    <div className="container user-info">
      <h3>Thông tin tài khoản</h3>
      <div className="row">
        <div className="col-3 user-info__left text-center">
          <img src="/img/username.jpg" alt="" />
          <p className="text-center">Học Viên</p>
          <div className="user-info__left__btn">
            <button className="btn btn-primary">0 điểm</button>
            <button className="btn btn-success">Khóa Học</button>
          </div>
          <div className="user-info__left__title mt-4 ml-5">
            <p>
              <i class="fa fa-user"></i> Thông tin tài khoản
            </p>
            <p onClick={()=>{
              history.push("/TaiKhoan/DoiMatKhau")
            }}>
              <i class="fa fa-lock"></i>Đổi mật khẩu
            </p>
            <p>
              <i class="fa fa-book"></i> Khóa học của tôi
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
