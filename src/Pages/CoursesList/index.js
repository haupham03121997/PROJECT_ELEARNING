import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCoursesAction } from "../../Action/danhSachKhoaHocAtion";
import { ThemGioHang } from "../../Action/Themgiohang";
import Carousel from "../../component/Carousel";
import Loading from "../../component/Loading";
import Introduce from "../../component/Introduce";
import Slider from "react-slick";

import FeedBack from "../../component/FeedBack";
export default function HomeScreen(props) {
  const {  match } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const maDanhMuc = match.params.maDanhMucKhoaHoc;
  useEffect(() => {
    dispatch(getCoursesAction());
    // dispatch(layDanhMucKhoaHocAction(maDanhMuc));
  }, [maDanhMuc]);

  const { coursesList, loading } = useSelector(
    (state) => state.getCoursesList
  );
  const { danhSachKH } = useSelector((state) => state.ThemKhoaHocReducer);
  const {credential} = useSelector((state)=>state.UserReducer);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Carousel />
      <Introduce />
      <div className="section-content-main">
        <div className="container-fluid carousel-slick-background">
          {/* <h1 className="display-4 text-center">Khóa Học Nổi Bật</h1> */}
        </div>
        <div className="container">
          <div className="container--custom">
            <div className="carousel-slick--custom ">
              <h3 className="mt-5 text-center carousel-slick--custom__title">
                KHÓA HỌC NỔI BẬT
              </h3>

              <p className="text-center carousel-slick--custom__title1">
                {/* Những khóa học có số lượng học viên theo học nhiều nhất và có */}
                {/* phản hồi tích cực nhất */}
                KHÓA LẬP TRÌNH FRONT-END CHUYÊN SÂU CHO NGƯỜI MỚI BẮT ĐẦU
              </p>
              <span className="item-prev">
                <i className="fa fa-angle-left" />
              </span>
              <span className="item-next">
                <i className="fa fa-angle-right" />
              </span>
              <Slider {...settings}>
                {coursesList.map((item, index) => {
                  return (
                    <div
                      className="col-12  mt-5 section-content-main__detail "
                      key={index}
                    >
                      <div className="card card--custom mb-3">
                        <div className="card--img">
                          <img
                            className="card-img-top"
                            src={item.hinhAnh}
                            alt={item.biDanh}
                          />
                          <div className="card__overlay"></div>
                        </div>
                        <div className="card-body p-0 pb-0">
                          <h4
                            onClick={() => {
                              history.push(`/ChiTietKhoaHoc/${item.maKhoaHoc}`);
                            }}
                            className="card-title mb-0 ml-4"
                          >
                            {item.tenKhoaHoc}
                          </h4>
                          <div className="rate-start pl-4">
                            <span>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </span>

                            <span>4.5(1.234)</span>
                          </div>
                          <p className="view my-2 pl-4">
                            Lượt xem <i class="fa fa-eye"></i> {item.luotXem}
                          </p>
                          {/* <p>Người tạo : {item.danhMucKhoaHoc.maDanhMucKhoahoc}</p> */}
                          <div className="btn-detail mt-1 ml-4 mr-3">
                            <button
                              className="btn btn-content-signin"
                              onClick={() => {
                                history.push(
                                  `/ChiTietKhoaHoc/${item.maKhoaHoc}`
                                );
                              }}
                            >
                              <i className=" mr-2 fa fa-angle-right"></i>Xem chi
                              tiết
                            </button>
                            {danhSachKH
                              .filter(
                                (courses) =>
                                  courses.maKhoaHoc === item.maKhoaHoc
                              )
                              .map((hihi) => {
                                return (
                                  <button
                                    className="btn btn-content-go "
                                    onClick={()=>{
                                      history.push("/giohang")
                                    }}
                                  >
                                    <div className="span">
                                      <i className="fa fa-shopping-cart  mr-2"></i>
                                      Đến giỏ hàng
                                    </div>
                                  </button>
                                );
                              })}
                              {credential ? 
                               <button
                              className="btn btn-content-signin"
                              onClick={() => {
                                dispatch(ThemGioHang(item));
                              }}
                            >
                              <i className="fa fa-shopping-cart  mr-2"></i>
                              Thêm
                            </button> :  <button
                              className="btn btn-content-signin"
                              onClick={() => {
                               history.push("/DangNhap")
                              }}
                            >
                              <i className="fa fa-shopping-cart  mr-2"></i>
                                Thêm
                            </button>}
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          {/* <Button color="danger" onClick={toggle}>
            {buttonLabel} hih
          </Button> */}
          {/* <ModelTest className={className} isOpen={modal} toggle={toggle} /> */}
          <div>
            {/* <ul
              className="nav nav-tabs nav-tabs--custom"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  onClick={() => {
                    history.push("/");
                  }}
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#all"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Tất cả khóa học
                </a>
              </li>
              {categoriesCourses.map((item, index) => {
                // const id = item.maDanhMuc;
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link "
                      id="home-tab"
                      data-toggle="tab"
                      href={`#${item.maDanhMuc}`}
                      onClick={() => {
                        history.push(`${item.maDanhMuc}`);
                      }}
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      {item.tenDanhMuc}
                    </a>
                  </li>
                );
              })}
            </ul> */}
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="all"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {/* <div className="row mb-5">
                  {coursesList.map((item, index) => {
                    return (
                      <div
                        className="col-3 mt-5 section-content-main__detail "
                        key={index}
                      >
                        <div
                          onClick={() => {
                            history.push(`/ChiTietKhoaHoc/${item.maKhoaHoc}`);
                          }}
                          className="card card--custom mb-3"
                        >
                          <img
                            className="card-img-top"
                            src={item.hinhAnh}
                            alt={item.biDanh}
                          />
                          <div className="card-body">
                            <h4 className="card-title">{item.tenKhoaHoc}</h4>
                            <div className="rate-start">
                              <div>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-half-alt" />
                              </div>

                              <span>4.5(1.234)</span>
                            </div>
                            <p className="view my-3">
                              Lượt xem <i className="fa fa-eye" />
                              {item.luotXem}
                            </p>
                            <div className="text-right mt-4">
                              <button className="btn btn-content-signin">
                                Chi Tiết Khóa Học
                              </button>
                            </div>
                          </div>
                          <div className="card__overlay"></div>
                        </div>
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeedBack />
    </div>
  );
}
