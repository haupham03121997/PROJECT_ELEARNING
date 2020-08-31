import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesDetailAction } from "../../Action/danhSachKhoaHocAtion";
import { ghiDanhKhoaHocAction } from "../../Action/ghiDanhKhoaHocAction";
import { useHistory } from "react-router-dom";
import axios from '../../Utils/axiosClient';

export default function CoursesDetail(props) {
  const history = useHistory();
  const { match } = props;
  // const [isCompleted, setisCompleted] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const maKhoaHoc = match.params.maKhoaHoc;
    dispatch(getCoursesDetailAction(maKhoaHoc));
  }, [match.params.maKhoaHoc]);
  const { coursesDetail } = useSelector((state) => state.getCoursesList);
  const { categoriesDetail } = useSelector(
    (state) => state.getCategoriesCourses
  );
  const { credential } = useSelector((state) => state.UserReducer);
    console.log(coursesDetail);
  //Ghi danh khóa học

  const [values, setValues] = useState({
    maKhoaHoc: "",
    taiKhoan: "",
  }); 
useEffect(()=>{
  if(credential){
    const taiKhoan = credential.taiKhoan;
    const maKhoaHoc = match.params.maKhoaHoc;
    setValues({
      maKhoaHoc : maKhoaHoc,
      taiKhoan : taiKhoan
    });
    axios.post('http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet')
   }
},[])
 
  // if(credential){
    
   
  // }
  console.log("VALUES" , values);
  // const values = () =>{
  //   if(credential !== null)
  //     const value
  // }
  const handleSubmit = () => {
    dispatch(ghiDanhKhoaHocAction(values));
    // console.log("value" , values);
  };
  return (
    <div className="courses_detail animate__animated animate__bounce animate__zoomIn">
      {/* <h1 class="animate__animated animate__bounce animate__slow animate__fadeInDown animate__bounceIn">An animated element</h1> */}
      <div className="header-detail">
        <div className="header-detail__img">
          <img
            src={coursesDetail.hinhAnh}
            className=""
            alt={coursesDetail.biDanh}
          />
          <div className="header-detail__overlay"></div>
        </div>
      </div>
      <div className="header-detail__content">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="header-detail__content__img">
                <img src={coursesDetail.hinhAnh} alt={coursesDetail.biDanh} />
              </div>
            </div>
            <div className="col-7">
              <div className="header-detail__content__title">
                <h1>
                  Giới Thiệu Mô Tả Khóa Học {categoriesDetail.tenDanhMucKhoaHoc}{" "}
                  {coursesDetail.tenKhoaHoc}
                </h1>
                {credential ? (
                  <button
                    onClick={handleSubmit}
                    className="btn btn-outline-warning my-4"
                  >
                    Ghi Danh
                  </button>
                ) : (
                  <button
                    // onClick={handleSubmit}
                    onClick={() => {
                      history.push("/DangNhap");
                    }}
                    className="btn btn-outline-warning my-4"
                  >
                    Đăng nhập để ghi danh
                  </button>
                )}

                <p>
                  Đánh giá khóa học
                  <span className="ml-3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div className="bottom-detail__content__title">
                <h1>Mô tả khóa học</h1>
                <p> {coursesDetail.tenKhoaHoc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-derestion mt-5">
        <div className="container ">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Chi Tiết
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Đánh Giá
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div className="col-3">
                  <p>Tên Khóa Học</p>
                  <p>Ngày tạo khóa học</p>
                  <p>Bí Danh</p>
                  <p>Mô tả khóa học</p>
                </div>
                <div className="col-9">
                  <p>{coursesDetail.tenKhoaHoc}</p>
                  <p>{coursesDetail.ngayTao}</p>
                  <p>{coursesDetail.biDanh}</p>
                  <p>{coursesDetail.moTa}</p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
