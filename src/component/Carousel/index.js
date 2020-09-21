import React from "react";
import { useSelector } from "react-redux";
import Particles from "../Particles";
import "./carousel.scss";

export default function Carousel() {
  const { credential } = useSelector((state) => state.UserReducer);
  // console.log("wwhat", credential);
  const styles = {
    root: {
      fontFamily: "sans-serif",
      textAlign: "center",
      height: "100%",
      background: "#222",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div className="section-carousel">
    
        <Particles />
      <div className="content">
        <p>Học lập trình qua dự án thực tế với các khóa học chất lượng</p>
        <h1>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
        <p>Trở thành lập trình viên chuyên nghiệp tại CyberSoft</p>
        <div className="button mt-5">
          {credential ? (
            <a className="button__courses">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              KHÓA HỌC
            </a>
          ) : (
            <>
              <a className="button__courses mx-5">
                {" "}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                KHÓA HỌC
              </a>
              <a className="button__join">
                {" "}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                THAM GIA NGAY
              </a>
            </>
          )}
        </div>
      </div>
      <div className="index-grid">
          <div className="container-fluid">
          <div className="row">
              <div className="col-4  index-grid__col-1">
                <img src="/img/1.png" alt="" />
                <h3 className="mt-3">Trên 4000 học viên</h3>
              </div>
              <div className="col-4  index-grid__col-2">
                <img src="/img/2.png" alt="" />
                <h3 className="mt-4">5+ khóa học dành cho bạn</h3>
              </div>
              <div className="col-4 index-grid__col-3">
                <img src="/img/3.png" alt="" />
                <h3 className="mt-4">Học bất cứ lúc nào, bất cứ nơi đâu</h3>
              </div>
            </div>
          </div>
          </div>
    </div>
  );
}
