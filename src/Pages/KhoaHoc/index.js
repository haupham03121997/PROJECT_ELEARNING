import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../Action/danhMucKhoaHocAction";
import { getCoursesAction } from "../../Action/danhSachKhoaHocAtion";
import { layDanhMucKhoaHocAction } from "../../Action/layDanhMucKhoaHocAction";
import Loading from "../../component/Loading";
import "./khoahoc.scss";

export default function KhoaHoc() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    //Call api lấy danh mục khóa học
    dispatch(getCategoryAction());
    dispatch(getCoursesAction());
  }, []);

  const { categoriesCourses } = useSelector(
    (state) => state.getCategoriesCourses
  );
  const { coursesList, loading } = useSelector((state) => state.getCoursesList);
  const { categoriesDetail } = useSelector(
    (state) => state.getCategoriesCourses
  );
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="section-khoahoc">
      <div className="section-khoahoc__header"></div>
      <div className="section-khoahoc__content">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 col-lg-3 col-sm-0 danhmuc__menu">
              <ul>
                {categoriesCourses.map((category, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        dispatch(layDanhMucKhoaHocAction(category.maDanhMuc));
                        setIsClick(!isClick);
                      }}
                      className="active"
                    >
                      <a className="active">
                        <i className="fa fa-angle-double-right mr-2"></i>
                        {category.tenDanhMuc}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-8 col-lg-9 col-sm-12">
              <h2 onClick={()=>{
                setIsClick(false)
              }}>Các khóa học mới nhất</h2>
              <div className="row">
                {isClick ? (
                  <>
                    {categoriesDetail.length ? (
                      <>
                        {categoriesDetail.map((category, index) => {
                          return (
                            <div
                              className="col-md-6 col-sm-12  section-content-main__detail "
                              key={index}
                            >
                              <div className="card card--custom mb-3">
                                <div className="card--img">
                                  <img
                                    className="card-img-top"
                                    src={category.hinhAnh}
                                    alt
                                  />
                                  <div className="card__overlay"></div>
                                </div>
                                <div className="card-body pb-0">
                                  <h4
                                    onClick={() => {
                                      history.push(
                                        `/ChiTietKhoaHoc/${category.maKhoaHoc}`
                                      );
                                    }}
                                    className="card-title mb-0"
                                  >
                                    {category.tenKhoaHoc}
                                  </h4>
                                  <div className="rate-start">
                                    <span>
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                    </span>

                                    <span>4.5(1.234)</span>
                                  </div>
                                  <p className="view my-2">
                                    Lượt xem <i class="fa fa-eye"></i>{" "}
                                    {category.luotXem}
                                  </p>
                                  {/* <p>Người tạo : {item.nguoiTao.hoTen}</p> */}
                                  <div className="btn-detail mt-1">
                                    <button
                                      className="btn btn-content-signin"
                                      onClick={() => {
                                        history.push(
                                          `/ChiTietKhoaHoc/${category.maKhoaHoc}`
                                        );
                                      }}
                                    >
                                      <i className=" mr-2 fa fa-angle-right"></i>
                                      Xem chi tiết
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      // "No Data"
                      "Không có khóa học nào"
                    )}
                  </>
                ) : (
                  <>
                    {coursesList.map((item, index) => {
                      return (
                        <div
                          className="col-md-12 col-sm-12 col-lg-6 section-content-main__detail "
                          key={index}
                        >
                          <div className="card card--custom mb-3">
                            <div className="card--img">
                              <img
                                className="card-img-top"
                                src={item.hinhAnh}
                                alt
                              />
                              <div className="card__overlay"></div>
                            </div>
                            <div className="card-body pb-0">
                              <h4
                                onClick={() => {
                                  history.push(
                                    `/ChiTietKhoaHoc/${item.maKhoaHoc}`
                                  );
                                }}
                                className="card-title mb-0"
                              >
                                {item.tenKhoaHoc}
                              </h4>
                              <div className="rate-start">
                                <span>
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </span>

                                <span>4.5(1.234)</span>
                              </div>
                              <p className="view my-2">
                                Lượt xem <i class="fa fa-eye"></i>{" "}
                                {item.luotXem}
                              </p>

                              <div className="btn-detail mt-1">
                                <button
                                  className="btn btn-content-signin"
                                  onClick={() => {
                                    history.push(
                                      `/ChiTietKhoaHoc/${item.maKhoaHoc}`
                                    );
                                  }}
                                >
                                  <i className=" mr-2 fa fa-angle-right"></i>Xem
                                  chi tiết
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
