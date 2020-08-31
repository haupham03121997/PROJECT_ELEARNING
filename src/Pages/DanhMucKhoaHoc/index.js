import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhMucKhoaHocAction } from "../../Action/layDanhMucKhoaHocAction";
import Loading from "../../component/Loading";
import { getCategoriesCourses } from "../../Reducer/danhMucKhoaHoc.js";

export default function DanhMucKhoaHoc(props) {
  const { location, match } = props;
  console.log("match", match);

  const dispatch = useDispatch();
  const { categoriesDetail } = useSelector(
    (state) => state.getCategoriesCourses
  );
  useEffect(() => {
    const maDanhMuc = match.params.maDanhMucKhoaHoc;
    // console.log('maDanhMuc', maDanhMuc);
    console.log("Mã danh mục", maDanhMuc);
    dispatch(layDanhMucKhoaHocAction(maDanhMuc));
  }, [match.params.maDanhMucKhoaHoc]);

  return (
    <div>
      <div className="section-content-main ">
        <div className="container">
          <h3>Danh Mục Khóa Học {match.params.maDanhMucKhoaHoc}</h3>

          <div className="row mb-5">
            {categoriesDetail.map((item, index) => {
              return (
                <div
                  className="col-3 mt-4 section-content-main__detail 
                                animate__animated animate__bounce animate__fadeInDown "
                  key={index}
                >
                  <div className="card card--custom">
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
                      <div className="text-right mt-4">
                        <button className="btn btn-content-signin">
                          ĐĂNG KÝ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
