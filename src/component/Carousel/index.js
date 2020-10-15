import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Particles from "../Particles";
import "./carousel.scss";
import "../../scss/Helper/_variable.scss";
import CountUp from "react-countup";
import WOW from "wow.js";
export default function Carousel() {
  const history = useHistory();
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
    <div>
      <div className="section-carousel">
        <Particles />
        <div className="content1">
          <p>Học lập trình qua dự án thực tế với các khóa học chất lượng</p>
          <h1>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
          <p>Trở thành lập trình viên chuyên nghiệp tại CyberSoft</p>
          <div className="button mt-5">
            {credential ? (
              <a
                className="button__courses"
                onClick={() => {
                  history.push("/khoahoc");
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                KHÓA HỌC
              </a>
            ) : (
              <>
                <a
                  className="button__courses"
                  onClick={() => {
                    history.push("/khoahoc");
                  }}
                  className="button__courses  mx-md-5 mx-sm-1"
                >
                  {" "}
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  KHÓA HỌC
                </a>
                <a
                  onClick={() => {
                    history.push(`/DangKy`);
                  }}
                  className="button__join"
                >
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
      </div>
      <div className="index-grid ">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-4 col-sm-12  index-grid__col-1 wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="5s"
            >
              {/* <img src="/img/1.png" alt="" /> */}
              {/* <i className="fa fa-home"></i> */}
              <div className="icon">
                <div className="icon-1">
                  <CountUp start={0} end={4} delay={2} duration={5} />
                  <p className="icon-2 ml-3">trung tâm</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 wow fadeInDown   index-grid__col-2">
              {/* <img src="/img/2.png" alt="" /> */}
              {/* <i className="fa fa-users"></i> */}
              <div className="icon">
                <div className="icon-1">
                  <CountUp start={0} end={3250} delay={2} duration={3} />
                  <p className="icon-2 ml-3">học viên</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 wow fadeInDown  index-grid__col-3">
              {/* <img src="/img/3.png" alt="" /> */}
              {/* <i className="fa fa-trophy"></i> */}
              <div className="icon">
                <div className="icon-1">
                  <CountUp start={0} end={54} delay={2} duration={5} />
                  <p className="icon-2 ml-3">thành tích đạt được </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
