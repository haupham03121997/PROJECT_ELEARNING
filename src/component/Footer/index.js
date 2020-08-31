import React from 'react'
// import styles from './styles.module.scss'
export default function Footer() {
    return (
        <div className='section-footer'>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-4 footer__title ">
                        <h2 className='text-left'>
                            NHẬN TIN SỰ KIỆN & KHUYẾN MÃI
                        </h2>
                        <p className='text-left'>
                            CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình
                            CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN
                            MÃI hấp dẫn đến các bạn.
                        </p>
                        <div className="row ">
                            <div className="col-8 pr-1">
                                <div className="form-group ">
                                    <input type="text" className='form-control' placeholder='you.address@email.com' />

                                </div>
                            </div>
                            <div className="col-4 p-0 text-left">
                                <button className='btn btn--signin btn-warning'>ĐĂNG KÝ</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 footer-middle" >
                        <h2 className='text-left'>ĐĂNG KÝ TƯ VẤN</h2>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder='Họ và tên*' />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder='Email liên hệ*' />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder='Địa chỉ Liên Hệ' />
                        </div>
                        <div className='text-left'>
                            <button className='btn btn-warning  btn--signin'>ĐĂNG KÝ TƯ VẤN</button>
                        </div>
                    </div>
                    <div className="col-4 footer-right">
                        <div className="fanpages">
                            <img src="/img/img-footer.jpg" className='w-100 d-block' alt="" />
                        </div>
                        <div className="fanpages1">
                            <img src="/img/img-footer2.png" className='w-100 d-block' alt="" />
                        </div>
                    </div>
                </div>
                <div className="row pt-3 ">
                    <div className="col-4 text-left ">
                        <div>
                            <p className='mb-1'><i className="fa fa-map-marker mr-1" /> <span>Cơ sở 1: 376 Võ Văn Tần – Quận 3</span></p>
                            <p className='mb-1'><i className="fa fa-map-marker mr-1" /> <span>Cơ sở 2: 459 Sư Vạn Hạnh – Quận 10</span></p>
                            <p className='mb-1'><i className="fa fa-map-marker mr-1" /> <span>Cơ sở 3: 82 Ung Văn Khiêm – Bình Thạnh</span></p>
                            <p className='mb-1'><i className="fa fa-map-marker mr-1" /> <span> Cơ sở 4: 110 Đường số 10 nội bộ khu CityLand Phan Văn Trị – Gò Vấp</span></p>
                            <p className='mb-1'><i className="fa fa-phone-volume mr-1" /><span>096.105.1014 – 077.886.1911</span></p>
                        </div>

                    </div>
                    <div className="col-4 text-left ">
                        <p style={{color: 'white'}}>
                            <a className='mr-2' href="" >Lập trình Front End   </a>
                            <a href="" className='mr-2' >Lập trình React JS     </a>
                            <a href="" className='mr-2' > Lập trình React Angular  </a>
                            <a href="" className='mr-2' > Lập trình tư duy    </a>
                            <a href="" className='mr-2' >Lập trình NodeJS   </a>
                            <a href="" className='mr-2' >    Lập trình Backend  </a>
                            <a href="" className='mr-2' > Lập trình Java Web   </a>
                            <a href="" className='mr-2' >Lập trình Java Spring – Java Boot         </a>
                            <a href="" className='mr-2' > Tôi Đi Code Dạo   </a>
                            <a href="" className='mr-2' >  Học SEO Hà Nội ở Vietmoz    </a>
                            <a href="" className='mr-2' >Học lập trình trực tuyến </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
