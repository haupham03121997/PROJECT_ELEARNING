import React from "react";
// import styles from './styles.module.scss'
export default function Footer() {
  return (
    <div className="section-footer">
      <div className="container-fluid">
        <div className="footer-content">
          <div className="row">
            <div className="col-3">
              <h3>LIÊN HỆ</h3>
              <p><i className="fa fa-location-arrow mr-1"></i> Trụ sở: 112 Cao Thắng, Quận 3 – HCM</p>
          
              <p><i className="fa fa-mobile mr-3"></i>Hotline: 096.105.1014 – 077.886.1911</p>
              <p><i className="fa fa-envelope mr-2"></i>Email: cybersoft@gmail.com</p>
            </div>
            <div className="col-2">
              <h3>CYBERSOFT</h3>
              <p>Giới thiệu</p>
              <p>Câu hỏi thường gặp</p>
              <p>Liên hệ</p>
            </div>
            <div className="col-3">
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
            <div className="col-4">
                <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
                <div className="row mb-4">
                    <div className="col-6 ">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="col-6">
                        <input type="text" placeholder="Email"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <textarea  placeholder="Message" cols="50" rows="5"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div className="col-12">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
