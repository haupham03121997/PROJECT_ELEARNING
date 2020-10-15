import React from "react";
import "./feedback.scss";
import Slider from "react-slick";
import Countup from "../CountUp";
export default function FeedBack() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
    // fade: true
  };
  return (
    <>
      <Countup />
      <div className="feedback">
        <div className="feedback__background">
          {/* <img src="/img/feedback.jpg" alt="feedback" /> */}
          <div className="feedback__background__title">
            <h1>Ý Kiến Học Viên </h1>
          </div>
          <div className="feedback__background__content">
            <Slider {...settings}>
              <div className="feedback__background__content__detail text-center">
                <img src="/img/avarta1.jpg" alt="" />
                <p>
                  Không biết những trung tâm khác thì ra sao. Riêng tui thấy
                  cybersoft là tuyệt vời, chất lượng nhất Sài Gòn
                </p>
                <div className="icon-star">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p className="name">Hậu Phạm</p>
              </div>

              <div className="feedback__background__content__detail text-center">
                <img src="/img/avatar2.jpg" alt="" />
                <p>
                  Giảng viên dễ thương, tâm lý và các anh menter "Bụng Bự" hỗ
                  trợ nhiệt tình luôn. Code sấp mặt nhưng không nhàm chán.
                </p>
                <div className="icon-star">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p className="name">Thúy Uyên</p>
              </div>
              <div className="feedback__background__content__detail text-center">
              <img src="/img/avarta3.jpg" alt="" />
                <p>
                Học xong khóa này tui sẽ tìm kiếm một khóa tiếp theo để học.
                  Trung tâm truyền đạt kiến thức rất vững chắc

                </p>
                <div className="icon-star">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p className="name">Đạt Quý</p>
               
              </div>
              <div className="feedback__background__content__detail text-center">
              <img src="/img/avarta4.jpg" alt="" />
                <p>
                Đánh giá 5 sao cho giảng viên ở đây

                </p>
                <div className="icon-star">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p className="name">Văn Hùng</p>
             
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
