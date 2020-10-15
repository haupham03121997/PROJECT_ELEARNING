import React from "react";
import "./contact.scss";
import swal from "sweetalert"
export default function LienHe() {
  return (
    <div className="contact-main">
      {/* padfakjdfnaksdsfsdfsdnlfkasmdflkasdmflksdf */}
      <div className="contact-main__bg"></div>
      <div className="contact-main__img">
        <div class="row image-hover">
          <div className="col-md-6 col-sm-8 image-hover__content animate__animated animate__bounce ">
            <img src="/img/pages-banner-2.png" alt="" />
          </div>
          <div className="col-md-6 col-sm-4 text-right">
            <img src="/img/banner-effect-2.png" alt="" />
          </div>
        </div>
        <div className="contact-main__img__title animate__animated animate__bounce  animate__fadeInDown">
          <h1> TƯ VẤN LỘ TRÌNH CHO BẠN</h1>
          <p>
            Chúng tôi sẽ tư vấn miễn phí bạn toàn bộ chương trình, lộ trình để
            thành công trong lĩnh vực lập trình với thời gian và chi phí tối ưu
            nhất.
          </p>
        </div>
      </div>
      <div className="contact-main__content">
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12 ">
            <h2>Văn phòng</h2>
            <h4>Liên hệ</h4>
            <p>
            <i className="fa fa-location-arrow  mr-2"></i> Cơ sở 1: 376 Võ Văn Tần - Quận 3 HCM ( Đoạn 2 chiều - về hướng
              Cao Thắng)
            </p>
            <p> <i className="fa fa-location-arrow  mr-2"></i>  Cơ sở 2: 459 - LẦU 2- SƯ VẠN HẠNH, QUẬN 10, HCM (Ngay ĐH Y Dược
              Phạm Ngọc Thạch - trệt là HD BANK)
            </p>
            <p>
            <i className="fa fa-location-arrow  mr-2"></i>Cơ sở 3: 82 Ung Văn Khiêm, Bình Thạnh, HCM (Cuối đường D2, gần
              ĐH HuTech)
            </p>
            <p>
            <i className="fa fa-location-arrow  mr-2"></i>Cơ sở 4: 110 Đường số 10 nội bộ khu CityLand Phan Văn Trị - Gò
              Vấp
            </p>
            <p><i className="fa fa-phone-square  mr-2"></i>Phone: (+84) 961.05.10.14 <span className="ml-2" style={{color : "red"}}>Hotline: 0961.05.10.14</span></p>
            <p> <i className="fa fa-envelope mr-2"></i>info@cybersoft.edu.vn</p>
            <p ></p>
          </div>
          <div className="col-md-8 col-sm-12">
            <h2>Đăng ký tư vấn</h2>
            <div className="row m-5">
             
              <div className="col-md-8 col-sm-12">
              <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Họ và tên*"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email*"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số điên thoại*"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    // type="text"
                    className="form-control"
                    rows="4" cols="50"
                    placeholder="Bạn cần tư vấn thêm về chương trình, vui lòng để lại tin nhắn tại đây"
                  />
                </div>
                <div className="form-group">
                    <button onClick={()=>{
                      swal({
                        title: "Đăng ký thành công! Chúng tôi sẽ liên lạc với bạn!",
                      });
                    }} className="btn-signin">
                      Đăng ký tư vấn
                    </button>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
