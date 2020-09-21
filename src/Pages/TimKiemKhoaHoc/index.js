import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import {timKiemKhoaHoc} from '../../Action/timKiemKhoaHoc';
import { getCoursesAction } from "../../Action/danhSachKhoaHocAtion";

export default function TimKiemKhoaHoc(props) {
  const history = useHistory();
  const { location, match } = props;
  // console.log("match Seacch " , match);

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //     const tenKhoaHoc = match.params.makhoahoc;
  //     dispatch(timKiemKhoaHoc(tenKhoaHoc))
  // },[match.params.makhoahoc])
  // const {searchCourses} = useSelector((state ) => state.getCoursesList)
  // // console.log("searchCourses" , searchCourses);
  // console.log( "id" ,searchCourses);
  // // console.log("renđẻ");
  const searchItem = match.params.makhoahoc;
  console.log(searchItem);
  // console.log("Mã khóa học"  , searchItem);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoursesAction());
  }, []);
  const { coursesList } = useSelector((state) => state.getCoursesList);
  // console.log("coursesList tìm kiếm" , coursesList);
  const arrSearchCoursesItem = coursesList.filter((courses) => {
    return (
      courses.tenKhoaHoc.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
    );
  });

  console.log("arrSearchCoursesItem", arrSearchCoursesItem);
  return (
    <div className="search-courses">
      <div className="container">
        <h3 className="mb-5">Tìm thấy khóa học mà bạn muốn</h3>
        {arrSearchCoursesItem.map((item, index) => {
          return (
            <div className="row row--custom mb-5" key={index}>
              <div className="col-4 p-3">
                <img src={item.hinhAnh} className="w-100 d-block" alt="" />
              </div>
              <div className="col-8">
                <h4>{item.tenKhoaHoc}</h4>
                <p className="description">{item.moTa}</p>
                <div className="start">
                  <p>
                    <div>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>

                    <span>(4.323)</span>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      history.push(`/ChiTietKhoaHoc/${item.maKhoaHoc}`);
                    }}
                    className="btn btn-outline-warning"
                  >
                    Chi Tiết Khóa Học
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
