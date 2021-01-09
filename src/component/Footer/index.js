import React from "react";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  DribbbleOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Autocomplete from "react-google-autocomplete";
export default function Footer() {
  return (
    <>
      <div className="section-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <h3>LIÊN HỆ</h3>
                <p>
                  <i className="fa fa-location-arrow mr-1"></i> Trụ sở: 112 Cao
                  Thắng, Quận 3 – HCM
                </p>

                <p>
                  <i className="fa fa-mobile mr-3"></i>Hotline: 096.105.1014 –
                  077.886.1911
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>Email:
                  cybersoft@gmail.com
                </p>
              </div>
              <div className="col-md-2 col-sm-12">
                <h3>CYBERSOFT</h3>
                <p>Giới thiệu</p>
                <p>Câu hỏi thường gặp</p>
                <p>Liên hệ</p>
              </div>
              <div className="col-md-3 col-sm-12">
                <h3>KHÓA HỌC</h3>
                <div className="row">
                  <div className="col-6">
                    <p>Lập trình Front End</p>
                    <p> Lập trình React JS </p>
                    <p> Lập trình React</p>
                    <p> Lập trình tư duy </p>
                  </div>
                  <div className="col-6">
                    <p> Lập trình NodeJS</p>
                    <p> Lập trình Java Web</p>
                    <p> Lập trình Java Spring – Java Boot</p>
                    {/* <p> Tôi Đi Code Dạo</p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-3 footer-end col-sm-12">
                <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
                <div className="row mb-4">
                  <div className="col-12 app-store">
                    <img src="/img/app-store.png" alt="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 google-play">
                    <img src="/img/google-play.png" alt="" />
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom__nav">
              <div className="col-2 ">
                <div className="footer-bottom__nav__logo">
                  <img src="/img/logo.png" alt="" />
                </div>
              </div>
              <div className="col-4">
                <ul className="mb-0">
                  <li className="li-1">Trang chủ</li>
                  <li>Khóa học</li>
                  <li>Liên hệ</li>
                  <li>Hỗ trợ</li>
                </ul>
              </div>
              <div className="col-6 text-right">
                <div className="social text-right">
                  <TwitterOutlined
                    style={{ color: "#969696", marginRight: "10px" }}
                  />
                  <FacebookOutlined
                    style={{ color: "#969696", marginRight: "10px" }}
                  />
                  <InstagramOutlined
                    style={{ color: "#969696", marginRight: "10px" }}
                  />
                  <DribbbleOutlined
                    style={{ color: "#969696", marginRight: "10px" }}
                  />
                  <GoogleOutlined
                    style={{ color: "#969696", marginRight: "10px" }}
                  />

                  {/* <i className="fab fa-twitter-square"></i> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right text-center">
          <p>&copy; Bản quyền CyberSoft 2017 - 2019</p>
        </div>
        <Autocomplete
          style={{ width: "90%", height : "50px" }}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          types={["(regions)"]}
          // componentRestrictions={{ country: "ru" }}
        />
      </div>
      {/* <FooterSign /> */}
    </>
  );
}
