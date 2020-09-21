import React from "react";
import "./feedback.scss";
import Slider from "react-slick";

export default function FeedBack() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop : true,
    fade: true
  };
  return (
    <div className="feedback">
      <div className="feedback__background">
        <img src="/img/feedback.jpg" alt="feedback" />
        <div className="feedback__background__title">
        <h1>Ý Kiến Người Dùng</h1>
        </div>
        <div className="feedback__background__content">
          
          <Slider {...settings}>
            <div className="feedback__background__content__detail text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vel esse. Enim minima tenetur vero voluptatibus quis sequi placeat reiciendis consequuntur nobis debitis velit, corrupti asperiores, odit atque incidunt autem.
              </p>
              <p className=" mt-4 mb-0">Hau Pham</p>
              <p>CEO</p>
            </div>
            <div className="feedback__background__content__detail text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vel esse. Enim minima tenetur vero voluptatibus quis sequi placeat reiciendis consequuntur nobis debitis velit, corrupti asperiores, odit atque incidunt autem.
              </p>
              <p className=" mt-4 mb-0">Van Tran</p>
              <p>CEO</p>
            </div>
            <div className="feedback__background__content__detail text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vel esse. Enim minima tenetur vero voluptatibus quis sequi placeat reiciendis consequuntur nobis debitis velit, corrupti asperiores, odit atque incidunt autem.
              </p>
              <p className=" mt-4 mb-0">Quan Hai</p>
              <p>CEO</p>
            </div>
            <div className="feedback__background__content__detail text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vel esse. Enim minima tenetur vero voluptatibus quis sequi placeat reiciendis consequuntur nobis debitis velit, corrupti asperiores, odit atque incidunt autem.
              </p>
              <p className=" mt-4 mb-0">van Hau</p>
              <p>CEO</p>
            </div>
            <div className="feedback__background__content__detail text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vel esse. Enim minima tenetur vero voluptatibus quis sequi placeat reiciendis consequuntur nobis debitis velit, corrupti asperiores, odit atque incidunt autem.
              </p>
              <p className=" mt-4 mb-0">Hau Pham</p>
              <p>CEO</p>
            </div>
            
          </Slider>
        </div>
      </div>
    </div>
  );
}
