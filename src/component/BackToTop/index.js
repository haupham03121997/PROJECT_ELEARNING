import React from "react";
import "./backtoTop.scss";
export default function index() {
    

    const OnClick = ()=>{
        window.scrollTo({top : 0 , behavior: 'smooth'})
    }

  return (
    <div className="backToTop">
      <button  onClick={OnClick}>
        <i className="fa fa-angle-double-up"></i>
      </button>
    </div>
  );
}
