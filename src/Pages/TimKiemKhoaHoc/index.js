import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../component/Header";
import { getCoursesAction } from "../../Action/danhSachKhoaHocAtion";

export default function TimKiemKhoaHoc(props) {

  const history = useHistory();
  const {  match } = props;
  const searchItem = match.params.makhoahoc;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoursesAction());
  }, []);
  const { coursesList } = useSelector((state) => state.getCoursesList);
  const arrSearchCoursesItem = coursesList.filter((courses) => {
    return (
      courses.tenKhoaHoc.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
    );
  });

  return (
    <div className="search-courses">
      <Header />
      <div className="image1">
        <div className="image1__overlay"></div>
        <div className="image1__content animate__animated animate__bounce animate__delay-1s animate__backInLeft">
          <div className="image1__content__body">TÌM KIẾM KHÓA HỌC</div>
        </div>
        <div className="image1__link animate__animated animate__bounce animate__delay-2s animate__backInLeft">
          <div className="image1__link__body">
            <i
              className="fa fa-home"
              onClick={() => {
                history.push("/");
              }}
            ></i>
            <i className="fa fa-angle-right"></i>
            <span></span>
            <i className="fa fa-angle-right"></i>
            <span> KẾT QUẢ TÌM KIẾM</span>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="mt-5">TÌM KIẾM MỚI</h3>
        <p>
          Nếu bạn không hài lòng với kết quả bên dưới, vui lòng thực hiện tìm
          kiếm khác
        </p>
        <div className="form-search">
          <form>
            <input type="text" placeholder="Tìm kiếm khóa học khác..." />
            <a className="btn-search">
              <i className="fa fa-search"></i>
            </a>
          </form>
        </div>
            <h4>{arrSearchCoursesItem.length} KẾT QUẢ TÌM KIẾM CHO TỪ KHÓA: {searchItem}</h4>
        {arrSearchCoursesItem.map((item, index) => {
          return (
            <div className="row row--custom my-5" key={index}>
              <div className="col-4 p-3">
                <img src={item.hinhAnh} className="w-100 d-block" alt="" />
              </div>
              <div className="col-8">
                <h4>{item.tenKhoaHoc}</h4>
                <div className="start">
                  <p className="mb-0">
                    <div>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>

                    {/* <span>(4.323)</span> */}
                  </p>
                </div>
                <p className="description">{item.moTa}</p>
               
                <div>
                <div className="btn-detail mt-1">
                            <button className="btn btn-content-signin"   onClick={() => {
                          history.push(`/ChiTietKhoaHoc/${item.maKhoaHoc}`);
                        }} >
                            <i className=" mr-2 fa fa-angle-right"></i>Xem chi tiết
                            </button>
                          </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
