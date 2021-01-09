import React from "react";
import "./phonecall.scss";
export default function phonecall() {
  return (
    <div className="section-phone">
      <a href="tel:+84373331451" className="section__pluse ">
        <div className="pluse">
          <i className="fa fa-mobile"></i>
        </div>
        <span>
            037.333.1451
        </span>
      </a>
    </div>
  );
}
