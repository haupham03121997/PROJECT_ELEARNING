import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCoursesDetailAction } from "../../Action/danhSachKhoaHocAtion";
import {
  dangKyKhoaHocAction,
  NGuoiDungDangKyKhoaHoc,
} from "../../Action/dangKyKhoaHocAction";
import { huyKHTheoKh } from "../../Action/huyKHTheoKh";
import { useHistory } from "react-router-dom";
import axios from "../../Utils/axiosClient";
import "./chitietkh.scss";

export default function CoursesDetail(props) {
  console.log("props " , props); 
  const history = useHistory();
  const { match } = props;
  
  const dispatch = useDispatch();
  const maKhoaHoc = match.params.maKhoaHoc;
  useEffect(() => {
    dispatch(getCoursesDetailAction(maKhoaHoc));
  }, [match.params.maKhoaHoc]);
  const { coursesDetail } = useSelector((state) => state.getCoursesList);
  // console.log("coursesDetail", coursesDetail);
  const { categoriesDetail } = useSelector(
    (state) => state.getCategoriesCourses
  );
  const { khDaDangKy } = useSelector((state) => state.ThemKhoaHocReducer);


  const { credential } = useSelector((state) => state.UserReducer);
  const { danhSachKH } = useSelector((state) => state.ThemKhoaHocReducer);
  const { credentialFacebook } = useSelector((state) => state.UserReducer);
  //Ghi danh khóa học
  const [isCheck, setIsCheck] = useState(false);
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
    }
  }, []);

  const { err } = useSelector((state) => state.ghiDanhKHReducer);
  const khoaHoc = JSON.parse(localStorage.getItem(maKhoaHoc));
  console.log("khoas hocj tu local", khoaHoc);
  const handleSubmit = () => {
    console.log("values", values);
    dispatch(dangKyKhoaHocAction(values));
    // dispatch(NGuoiDungDangKyKhoaHoc(coursesDetail));
  };
  const filterArr = danhSachKH.filter((courses) => {
    return courses.maKhoaHoc.indexOf(maKhoaHoc) !== -1;
  });
  console.log("filter", filterArr);
  return (
    <div className="courses_detail ">
      {/* <h1 class="animate__animated animate__bounce animate__slow animate__fadeInDown animate__bounceIn">An animated element</h1> */}
      <div className="header-detail">
        <div className="header-detail__signup ">
          <img src={coursesDetail.hinhAnh} alt="" />
          <div>
            <p className="pb-1 mb-0">Tên khóa học {coursesDetail.tenKhoaHoc}</p>
            {credential || credentialFacebook ? (
              <>
                {filterArr.length ? (
                  <>
                    <button
                      onClick={handleSubmit}
                      className="btn-dangkykhoahoc my-2"
                    >
                      <i className="fa fa-caret-right mr-2"></i>Đăng ký khóa học
                    </button>
                    <button
                      // onClick={handleSubmit}
                      className="btn-dangkykhoahoc my-2 ml-2"
                      onClick={()=>{
                        history.push("/giohang")
                      }}
                    >
                      <i className="fa fa-shopping-cart mr-2"></i>Tới giỏ hàng
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleSubmit}
                      className="btn-dangkykhoahoc my-2"
                    >
                      <i className="fa fa-caret-right mr-2"></i>Đăng ký khóa học
                    </button>
                    <button
                      // onClick={handleSubmit}
                      className="btn-dangkykhoahoc my-2 ml-2"
                    >
                      <i className="fa fa-shopping-cart mr-2"></i>Thêm giỏ hàng
                    </button>
                  </>
                )}
              </>
            ) : (
              <button
                // onClick={handleSubmit}
                onClick={() => {
                  history.push(
                    `/DangNhap?redirect=/ChiTietKhoaHoc/${match.params.maKhoaHoc}`
                  );
                }}
                className="btn-dangkykhoahoc my-4"
              >
                Đăng nhập để ghi danh
              </button>
            )}

            <p className="danhgiakhoahoc">
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
        <div className="header-detail__img">
          <img
            src={coursesDetail.hinhAnh}
            className=""
            alt={coursesDetail.biDanh}
          />

          <div className="header-detail__overlay"></div>
          <div className="image1__content ">
            <div className="image1__content__body1">
              KHÓA HỌC {coursesDetail.tenKhoaHoc}
            </div>
          </div>
          <div className="image1__link1 ">
            <div className="image1__link1__body1">
              <i
                className="fa fa-home"
                onClick={() => {
                  history.push("/");
                }}
              ></i>
              <i className="fa fa-angle-right"></i>
              <span>Khóa học</span>
              <i className="fa fa-angle-right"></i>
              <span> KHÓA HỌC {coursesDetail.tenKhoaHoc}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content-main ">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-0 danhmuc__menu">
              <ul>
                <li>
                  <a href="#gioithieu" className="active">
                    <i className="fa fa-angle-double-right mr-2"></i>Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#lotrinh">
                    <i className="fa fa-angle-double-right  mr-2"></i>Nội dung
                    đào tạo
                  </a>
                </li>
                <li>
                  <a href="#doituonghoc">
                    <i className="fa fa-angle-double-right  mr-2"></i>Đối tượng
                    học
                  </a>
                </li>
                <li>
                  <a href="#khaigiang">
                    <i className="fa fa-angle-double-right  mr-2"></i>Lịch khai
                    giảng
                  </a>
                </li>
                <li>
                  <a href="#thanhtoan">
                    <i className="fa fa-angle-double-right  mr-2"></i>Hình thức
                    trả học phí
                  </a>
                </li>
                <li>
                  <a href="#lienhe">
                    <i className="fa fa-angle-double-right  mr-2"></i>Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-9 col-sm-12  danhmuc_content">
              <div id="gioithieu">
                <h3>
                  LẬP TRÌNH {match.params.maKhoaHoc} LÀ GÌ
                  {/* {coursesDetail.nguoiTao.hoTen} */}
                  {/* {coursesDetail.length ? <span>{coursesDetail.nguoiTao.taiKhoan}</span> : "anajksdnajs"} */}
                  <i className="fa fa-question"></i>
                </h3>
                <p className="mt-5 p1">
                  Để giúp phần front-end của một trang web có thể hoạt động
                  được? Tất cả dữ liệu sẽ được lưu trữ ở đâu? Đó là phần việc
                  của back end. Phần {match.params.maDanhMucKhoaHoc} của một
                  trang web bao gồm một máy chủ, một ứng dụng, và một cơ sở dữ
                  liệu. Một lập trình viên back-end xây dựng và duy trì công
                  nghệ mà sức mạnh của những thành phần đó, cho phép phần giao
                  diện người dùng của trang web có thể tồn tại được.
                </p>
                <p>
                  Khoá học lập trình {match.params.maDanhMucKhoaHoc} dành cho
                  các bạn muốn khẳng định mình bằng cách xây dựng các trang web
                  chuẩn SEO sử dụng công nghệ mạnh và cập nhật nhất (Node JS /
                  Ruby on Rail, PHP….)
                </p>
                <p className="p3">
                  <p className="mb-0">
                    ➤ Nắm vững kỹ năng lập trình từ căn bản đến nâng cao.
                  </p>
                  <p className="mb-0">
                    ➤ Nắm vững công nghệ {match.params.maDanhMucKhoaHoc} thông
                    qua thực hành trên các đồ án thực tế.
                  </p>
                  <p>
                    ➤ Được nhận làm việc tại các doanh nghiệp phần mềm liên kết
                    ngay khi tốt nghiệp khóa học, hoặc hoàn toàn tự tin ứng
                    tuyển vào bất kỳ doanh nghiệp phần mềm nào khác.
                  </p>
                </p>
              </div>
              <div id="lotrinh">
                <div className="lotrinh__top">
                  <img
                    style={{ width: "300px" }}
                    src="/img/lotrinh2.png"
                    alt="lotrinh2.png"
                  />
                  <div className="p-md-5 p-sm-0">
                    <h3>Nội dung học tập</h3>
                    <p className="p-sm-1">
                      CyberSoft vạch ra lộ trình học lập trình một cách chi
                      tiết, bài bản, chuyên nghiệp, tránh lan man cho bạn. Đi
                      đúng lộ trình bạn sẽ tiết kiệm được thời gian, chi phí và
                      có việc làm tốt nhất và bền vững để thăng tiến.
                    </p>
                  </div>
                </div>
                <div className="lotrinh__content">
                  <div className="lotrinh__content__left">
                    <div className="content-left">
                      <div className="content-left__detail">
                        <div className="head">
                          <h4>Tuần 1-5:</h4>
                          <p className="mb-0">
                            Phát triển tư duy lập trình với{" "}
                            {coursesDetail.tenKhoaHoc}
                          </p>
                          <p>lập trình hướng đối tượng OOP</p>
                        </div>
                        <div className="body">
                          * Khóa học sẽ cung cấp kiến thức nền tảng từ biến,
                          hàm, khối lệnh, các lệnh điều khiển, vòng lặp, mảng
                          đến phần quan trọng nhất trong mọi lập trình đó là Lập
                          trình Hướng đối tượng (OOP) và một số thuật toán như
                          tìm kiếm, sắp xếp, tích lũy, kỹ thuật cờ hiệu...
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lotrinh__content__right">
                    <div className="content-right ">
                      <div className="content-right__detail">
                        <div className="head">
                          <h4>Tuần 5-8:</h4>
                          <p className="mb-0">
                            Thiết kế giao diện cơ bản {coursesDetail.tenKhoaHoc}
                          </p>
                        </div>
                        <div className="body">
                          * Trước khi bạn quyết định lên level này, bạn hãy
                          chuẩn bị sẵn sàng cho mình vốn kiến thức về HTML, CSS,
                          Bootstrap, Javascript cơ bản. Vốn kiến thức này là yêu
                          cầu đầu vào cho khóa học này bởi vì khóa học này bao
                          gồm nhiều dự án chuyên sâu, các dự án khởi nghiệp được
                          đưa vào để đào tạo, do vậy độ khó và nghiệp vụ rất
                          phức tạp.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lotrinh__content__left">
                    <div className="content-left">
                      <div className="content-left__detail">
                        <div className="head">
                          <h4>Tuần 8-12:</h4>
                          <p className="mb-0">
                            Học {coursesDetail.tenKhoaHoc} thông qua javascript
                            và ES6 cơ bản
                          </p>
                        </div>
                        <div className="body">
                          * Khóa học {coursesDetail.tenKhoaHoc} Javascript với
                          ReactJS/Angular/VueJS - NODE JS/Express cung cấp cho
                          bạn tất tần tật về Javascript(ES6) từ level cơ bản đến
                          chuyên sâu qua các dự án vô cùng sinh động và hấp dẫn.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lotrinh__content__right">
                    <div className="content-right ">
                      <div className="content-right__detail">
                        <div className="head">
                          <h4>Tuần 12-22:</h4>
                          <p className="mb-0">
                            Khóa học {coursesDetail.tenKhoaHoc} về ReactJS
                          </p>
                        </div>
                        <div className="body">
                          * Sau khi đã làm quen và tiếp cận một cách cụ thể về
                          ES6 thì chúng ta sẽ bắt tay vào xây dựng giao diện
                          bằng Reactjs(Single page application). Bạn sẽ được học
                          cách thiết kế một website khi chuyển trang không còn
                          load.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lotrinh__content__left">
                    <div className="content-left">
                      <div className="content-left__detail">
                        <div className="head">
                          <h4>Tuần 22-30:</h4>
                          <p className="mb-0">
                            Học {coursesDetail.tenKhoaHoc} thông qua Typescript
                            và Angular
                          </p>
                        </div>
                        <div className="body">
                          *Sau 12 buổi tiếp cận với ReactJS thì chúng ta sẽ được
                          hướng dẫn làm quen với Typescript và Angular
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lotrinh__content__right">
                    <div className="content-right ">
                      <div className="content-right__detail">
                        <div className="head">
                          <h4>Tuần 30-31:</h4>
                          <p className="mb-0">
                            Kết thúc khóa học {coursesDetail.tenKhoaHoc}
                          </p>
                        </div>
                        <div className="body">
                          * Đối với một tuần còn lại thì chúng ta sẽ được giảng
                          viên hướng dẫn để làm đồ án bằng ReactJs/Angular(tùy
                          các bạn chọn/chọn cả 2) và hướng dẫn làm một CV bắt
                          mắt.Và kết thúc buổi học sẽ là một buổi party ngoài
                          trời vui vẻ.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="doituonghoc">
                <h3>
                  ĐỐI TƯỢNG THAM GIA KHÓA HỌC {coursesDetail.tenKhoaHoc}
                  <i className="fa fa-question"></i>
                </h3>
                <ul>
                  <li>
                    Học sinh trong các trường phổ thông mong muốn xây dựng sự
                    nghiệp của mình với lĩnh vực lập trình công nghệ thông tin.
                  </li>
                  <li>
                    Sinh viên các khối ngành liên quan (Điện tử, Kinh tế, toán,
                    …) đang học tại các trường Trung cấp /Cao đẳng, Đại học.
                  </li>
                  <li>
                    Đặc biệt, sinh viên công nghệ thông tin năm 1 – 4 tại các
                    trường trung học / cao đẳng/ đại học mong muốn bổ sung kiến
                    thức của mình để đảm bảo 100% có việc làm sau khi kết thúc
                    khóa học (làm bài test để được miễn giảm học phí của các môn
                    lập trình đã học).
                  </li>
                  <li>
                    Các kỹ thuật viên và nhân viên của các công ty, văn phòng
                    muốn chuẩn hóa hoặc nâng cao kỹ năng chuyên nghiệp.
                  </li>
                  <li>
                    Các chuyên gia muốn cập nhật và nâng cao kiến thức, kỹ năng
                    về công nghệ mới.
                  </li>
                  <li>
                    Người đã đi làm muốn bổ sung kiến thức hoặc thay đổi nghề
                    nghiệp, …hoặc bất cứ ai yêu thích lập trình và muốn trở
                    thành Lập trình viên (DEV) sau này.
                  </li>
                </ul>
              </div>
              <div id="khaigiang">
                <h3>Lịch khai giảng</h3>
                <h4>THỜI GIAN HỌC</h4>
                <ul>
                  <li>Tổng thời gian: 6 tháng.</li>
                  <li>1 tuần 3 buổi: thứ 2,4,6 hoặc 3,5,7 – sáng, tối.</li>
                  <li>Khóa học bắt đầu từ ngày: 10/11/2020.</li>
                </ul>
                <h4>HỌC PHÍ</h4>
                <ul>
                  <li>
                    Vui lòng liên hệ{" "}
                    <button className="ml-5 btn-lien-he">
                      Vui lòng liên hệ
                    </button>
                  </li>
                </ul>
              </div>
              <div id="thanhtoan">
                <h3>HÌNH THỨC THANH TOÁN</h3>
                <h4>TRẢ PHÍ MỘT ĐỢT</h4>
                <p>
                  Nếu bạn có điều kiện tài chính, hình thức thanh toán này có
                  nhiều ưu đãi và sẽ giúp bạn không phải lo lắng về việc đóng
                  phí trong suốt quá trình học.
                </p>
                <h4>TRẢ PHÍ HAI ĐỢT</h4>
                <p>
                  Nếu bạn chưa đủ điều kiện tài chính, hình thức này sẽ áp dụng
                  đối với bạn. Bạn sẽ được đóng hai đợt trước khi khóa học được
                  khai giảng và đợt sau là lúc khóa học đã bắt đầu được một tuần
                </p>
              </div>
              <div id="lienhe">
                <h3>LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN</h3>
                <h4>HỆ THỐNG ĐÀO TẠO LẬP TRÌNH VIÊN CYBERSOFT</h4>
                <p>
                  <i class="fa fa-location-arrow mr-1"></i> Trụ sở: 112 Cao
                  Thắng, Quận 3 – HCM
                </p>
                <p>
                  <i class="fa fa-mobile mr-3"></i>Hotline: 096.105.1014 –
                  077.886.1911
                </p>
                <p>
                  <i class="fa fa-envelope mr-2"></i>Email: cybersoft@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
