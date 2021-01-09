import React , {useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import PhoneCall from "../../component/PhoneCall/phonecall";
import {XoaKhoaHocLocalStorage} from "../../Action/xoaKhoaHocAction";
import {SanPhamYeuThichAction} from "../../Action/Themgiohang";

import "./shopcart.scss";
export default function ShoppingCart() {
  const histopry = useHistory();
  const dispatch = useDispatch();
  const [isClick , setIsclick] = useState(false);
  
  useEffect(() => {
    console.log("re-render");
  } , [isClick]);
  const { danhSachKH } = useSelector((state) => state.ThemKhoaHocReducer);
  console.log("danhSachKH" , danhSachKH);
  return (
    <>
      <div className="section-shopping ">
        <div className="section-shopping__title">
          <div className="section-shopping__title__body">
            <p>
              <i
                className="fa fa-home"
                onClick={() => {
                  histopry.push("/");
                }}
              ></i>{" "}
              / <span>Shopping Cart</span> <br />
              Shopping Cart
            </p>
          </div>
        </div>
        <div className="section-shopping__content">
          <div className="container">
            <div className="row mt-5">
              <div className="col-12">
                <div className="count">
                  {danhSachKH ? (
                    <p>{danhSachKH.length} khóa học trong giỏ hàng</p>
                  ) : (
                    <p>0 Courses in Cart</p>
                  )}
                </div>

                {/* <div className="shop-cart-empty">
                  <div className="shop-cart-empty__detail">
                    <i className="fa fa-shopping-cart"></i>
                    <p>
                      Giỏ của bạn đang trống. Tiếp tục mua sắm để tìm một khóa
                      học!
                    </p>
                    <a className="btn-keep-cart">Tiếp tục mua sắm</a>
                  </div>
                 
                </div> */}
                <div className="shop-cart-non-empty">
                  <div className="row">
                    {danhSachKH.map((item, index) => {
                      return (
                        <>
                          <div className="col-8 shop-cart-non-empty__detail" key={index}>
                            <div className="img d-flex">
                              <img src={item.hinhAnh} alt="" />
                              <a>
                                <div className="title">{item.tenKhoaHoc}</div>
                                <span>{item.nguoiTao.hoTen}</span>
                              </a>
                            </div>
                            <div className="cart-action d-flex">
                              <div className="cart-action__flex">
                                <span  onClick={()=>{
                                  dispatch(XoaKhoaHocLocalStorage(item.maKhoaHoc));
                                  setIsclick(!isClick);
                                }}>Xóa khóa học</span>
                                <span onClick={()=>{
                                  dispatch(SanPhamYeuThichAction(item))
                                }}>Lưu xem sau</span>
                                <span>Thêm vào danh sách yêu thích</span>
                              </div>
                              <div className="money ml-5">99$</div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div className="col-4 shop-cart-non-empty__payer">
                      <h2>Tổng số tiền :</h2>
                  <p>{danhSachKH.length * 99}$ USD</p>
                      <button className="btn-payer">Mua khóa học</button>
                    </div>
                  </div>
                </div>
                <div className="shop-cart-empty__save mt-5">
                  <p> Lưu lại để xem sau</p>
                  <span>
                    Bạn chưa lưu bất kỳ khóa học nào trong danh sách xem sau.
                  </span>
                  <p>Khóa học yêu thích</p>
                  <span>
                    Bạn chưa thêm bất kỳ khóa học nào vào danh sách yêu thích
                    của mình.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
