import React from "react";
import "./introduce.scss";
export default function index() {
  return (
    <div className="section-introduce">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>TRUNG TÂM ĐÀO TẠO LẬP TRÌNH VIÊN CYBERSOFT</h2>
            <h3>Điểm nhấn của tương lai</h3>
          </div>
          <div className="col-sm-12 col-md-8 mt-md-5 ">
            <div className="section-introduce__left ">
              {/* <div className="iconbox">
                
              </div> */}
              <div className="img">
                <img src="/img/people.png" alt="" />
                <span>
                  <p className="overlay"></p>
                </span>
              </div>
              <div className="title">
                <a>Đối tượng</a>
                <span>
                  Đào tạo cho mọi đối tượng từ người trái ngành, người mới bắt
                  đầu, sinh viên công nghệ thông tin đến các bạn đã có có nghề
                  lập trình.
                </span>
              </div>

              {/* <div className="ml-4">
               
               
              </div> */}
            </div>
            <div className="section-introduce__left mt-2 mt-md-8 mt-sm-2">
              {/* <div className="iconbox">
              
              </div> */}
              <div className="img">
                <img src="/img/target.png" alt="" />
                <span>
                  <p className="overlay"></p>
                </span>
              </div>

              <div className="title">
                <a>MỤC TIÊU</a>
                <span>
                  {" "}
                  Đào tạo ra những lập trình viên tài năng, phát huy tố chất, tư
                  duy lập trình, có định hướng để trở thành những lập trình
                  chuyên nghiệp.
                </span>
              </div>
            </div>
            <div className="section-introduce__left  mt-md-8 mt-sm-2">
              {/* <div className="iconbox">
               
              </div> */}
              <div className="img">
                <img src="/img/target.png" alt="" />
                <span>
                  <p className="overlay"></p>
                </span>
              </div>
              <div className="title">
                <a>CƠ HỘI VIỆC LÀM</a>
                <span>
                  {" "}
                  Xây dựng hệ thống đối tác vững chắc, tìm hiểu nghiên cứu nhu
                  cầu thị trường, cập nhật nội dung giảng dạy.
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="section-introduce__right">
              <img src="/img/introduce-people.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
