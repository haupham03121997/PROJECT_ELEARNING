import React from 'react'
import  "./carousel.scss"
export default function Carousel() {
    return (
        <div className='section-carousel'>
            <img src="./img/carousel.jpg" className='w-100 d-block' alt=""/>
            <div className="content">
                <p>Học lập trình qua dự án thực tế với các khóa học chất lượng</p>
                <h1>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
                <p>Trở thành lập trình viên chuyên nghiệp tại CyberSoft</p>
                <div className="button">
                    <button className="button__courses">KHÓA HỌC</button>
                    <button className="button__join">
                        THAM GIA NGAY
                    </button>
                </div>
            </div>
        </div>
    )
}
