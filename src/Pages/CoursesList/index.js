import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCoursesAction } from "../../Action/danhSachKhoaHocAtion";
import { layDanhMucKhoaHocAction } from "../../Action/layDanhMucKhoaHocAction";
import Carousel from "../../component/Carousel";
import Loading from "../../component/Loading";
import Slider from "react-slick";
import { Button } from "reactstrap";
import ModelTest from "../../component/Modeltest";
import FeedBack from "../../component/FeedBack";
export default function HomeScreen(props) {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  // const { location, match } = props;
  // console.log("match" , match);
  const { location, match } = props;
  // console.log("match" , match);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoursesAction());
    const maDanhMuc = match.params.maDanhMucKhoaHoc;
    // console.log('maDanhMuc', maDanhMuc);
    // console.log("Mã danh mục", maDanhMuc);
    dispatch(layDanhMucKhoaHocAction(maDanhMuc));
  }, [match.params.maDanhMucKhoaHoc]);

  const { coursesList, loading, error } = useSelector(
    (state) => state.getCoursesList
  );

  const { categoriesCourses } = useSelector(
    (state) => state.getCategoriesCourses
  );
  // console.log("coursesList", coursesList);

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  };

  if (loading) {
    return <Loading />;
  }
  console.log("rednder home");
  return (
    <div>
      <Carousel />
      <div className="section-content-main">
        <div className="container-fluid carousel-slick-background">
          {/* <h1 className="display-4 text-center">Khóa Học Nổi Bật</h1> */}
        </div>
        <div className="container-fluid">
          <div className="container--custom">
            <div className="carousel-slick--custom ">
              <h3 className="mt-5 text-center">KHÓA HỌC NỔI BẬT</h3>
              <p className="text-center">
                {/* Những khóa học có số lượng học viên theo học nhiều nhất và có */}
                {/* phản hồi tích cực nhất */}
              </p>
              <p className="item-prev">
                <i className="fa fa-angle-left" />
              </p>
              <p className="item-next">
                <i className="fa fa-angle-right" />
              </p>
              <Slider {...settings}>
                {coursesList.map((item, index) => {
                  return (
                    <div
                      className="col-12 mt-5 section-content-main__detail "
                      key={index}
                    >
                      <div
                        onClick={() => {
                          history.push(`/ChiTietKhoaHoc/${item.maKhoaHoc}`);
                        }}
                        className="card card--custom mb-3"
                      >
                        <div className="card--img">
                          <img
                            className="card-img-top"
                            src={item.hinhAnh}
                            alt
                          />
                          <div className="card__overlay"></div>
                        </div>
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
                            Lượt xem <i class="fa fa-eye"></i> {item.luotXem}
                          </p>
                          <p>Người tạo : {item.nguoiTao.hoTen}</p>
                          <div className="text-right mt-4">
                            <button className="btn btn-content-signin">
                              Chi Tiết Khóa Học
                            </button>
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

              {categoriesCourses.map((item, index) => {
                // console.log(coursesList, item);
                // {item.filter(item => {
                // console.log("item nè " , item);
                // })}
                // return (
                //   <div
                //     className="tab-pane"
                //     id={`#${item.maDanhMuc}`}
                //     role="tabpanel"
                //     aria-labelledby="profile-tab"
                //     key={index}
                //   >
                //     <div className="col-3 mt-4 section-content-main__detail ">
                //       <div className="card card--custom">
                //         <img
                //           className="card-img-top"
                //           src={item.hinhAnh}
                //           alt={item.biDanh}
                //         />
                //         <div className="card-body">
                //           <h4 className="card-title">{item.tenKhoaHoc}</h4>
                //           <div className="rate-start">
                //             <div>
                //               <i className="fa fa-star" />
                //               <i className="fa fa-star" />
                //               <i className="fa fa-star" />
                //               <i className="fa fa-star" />
                //               <i className="fa fa-star-half-alt" />
                //             </div>
                //             <span>4.5(1.234)</span>
                //           </div>
                //           <div className="text-right mt-4">
                //             <button className="btn btn-content-signin">
                //               ĐĂNG KÝ
                //             </button>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // );
              })}
            </div>
          </div>
        </div>
      </div>
      <FeedBack />
    </div>
  );
}
