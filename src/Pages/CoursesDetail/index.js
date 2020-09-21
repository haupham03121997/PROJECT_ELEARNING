import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link} from "react-router-dom"
import { getCoursesDetailAction } from "../../Action/danhSachKhoaHocAtion";
import { dangKyKhoaHocAction } from "../../Action/dangKyKhoaHocAction";
import { useHistory } from "react-router-dom";
import axios from "../../Utils/axiosClient";

export default function CoursesDetail(props) {
  const history = useHistory();
  const { match } = props;
  console.log("Mactch chi tiet", match);
  // const [isCompleted, setisCompleted] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const maKhoaHoc = match.params.maKhoaHoc;
    dispatch(getCoursesDetailAction(maKhoaHoc));
  }, [match.params.maKhoaHoc]);
  const { coursesDetail } = useSelector((state) => state.getCoursesList);
  console.log("coursesDetail", coursesDetail);
  const { categoriesDetail } = useSelector(
    (state) => state.getCategoriesCourses
  );
  console.log(coursesDetail);
  const { credential } = useSelector((state) => state.UserReducer);

  //Ghi danh khóa học

  const [values, setValues] = useState({
    maKhoaHoc: "",
    taiKhoan: "",
  });
  useEffect(() => {
    if (credential) {
      const taiKhoan = credential.taiKhoan;
      const maKhoaHoc = match.params.maKhoaHoc;
      setValues({
        maKhoaHoc: maKhoaHoc,
        taiKhoan: taiKhoan,
      });
      axios.post(
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet"
      );
    }
  }, []);

    const {err} = useSelector(state => state.ghiDanhKHReducer);
    console.log("lỗi " , err);
    if(err){
      alert("Khóa học này bạn đã ghi danh!");
    }
  // if(credential){

  // }
  // console.log("VALUES", values);
  // const values = () =>{
  //   if(credential !== null)
  //     const value
  // }
  const handleSubmit = () => {
    dispatch(dangKyKhoaHocAction(values));
    // console.log("value" , values);
  };
  return (
    <div className="courses_detail animate__animated animate__bounce animate__zoomIn">
       <div className="logo" style={{ cursor: "pointer" }}>
        {/* <Link to="/">
          <img src="/img/logo2.png" alt="" />
        </Link> */}
      </div>
      {/* <div className="title">
        <p>Chi Tiết Khóa Học</p>

      </div> */}
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
                    Đăng ký
                  </button>
                ) : (
                  <button
                    // onClick={handleSubmit}
                    onClick={() => {
                      history.push(`/DangNhap?redirect=/ChiTietKhoaHoc/${match.params.maKhoaHoc}`);
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
                 <p><span className="mr-1">Tên Khóa Học:</span>  {coursesDetail.tenKhoaHoc}</p>
                <p><span className="mr-1">Ngày khởi tạo:</span> {coursesDetail.ngayTao}</p>
                  {/* <p>{coursesDetail.biDanh}</p> */}
                  <p><span className="mr-1">Mô tả chi tiết:</span> {coursesDetail.moTa}</p>
                  {/* <p><span className="mr-1">Mô tả chi tiết:</span> {}</p> */}
                  {/* {coursesDetail.nguoiTao.map((item , index)=>{
                    return(
                    <p>{item.hoTen}</p>
                    )
                  })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
