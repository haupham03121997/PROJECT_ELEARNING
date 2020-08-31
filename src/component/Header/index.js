import React, { useEffect, useState, useRef } from "react";
import { getCategoryAction } from "../../Action/danhMucKhoaHocAction";
import { LOGOUTACTION } from "../../Action/User";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { timKiemKhoaHoc } from "../../Action/timKiemKhoaHoc";
import { UserReducer } from "../../Reducer/UserReducer";
import Model from "../Model";
function useOutSideClick(ref, callback, when) {
  // Hàm Scroll
  const [isScrolled, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setIsScroll(!isScrolled);
      }
    });
  }, [isScrolled]);
  // console.log("isScrolled" , isScrolled);

  //
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  });

  const handler = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      savedCallback.current();
    }
  };
  useEffect(() => {
    if (when) {
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }
  }, [when]);
}
export default function Header() {
  const [isFocus, setIsFocus] = useState(false);
  const history = useHistory();
  const dropDownMenuRef = useRef();
  const [searchItem, setSearch] = useState({
    idCourses: "",
  });
  const userLocal = localStorage.getItem("userLogin");
  // const typingTimeoutRef = useRef(null);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setSearch({
      ...searchItem,
      [name]: value,
    });
    // console.log(name, value);
  };
  // console.log('history', history);
  const dispatch = useDispatch();
  useEffect(() => {
    //Call api lấy danh mục khóa học
    dispatch(getCategoryAction());
  }, []);
  const { categoriesCourses } = useSelector(
    (state) => state.getCategoriesCourses
  );
  const { credential } = useSelector((state) => state.UserReducer);

  // console.log("coursesList" ,credential);
  // console.log("credential", credential);
  // useEffect(()=>{

  // },[isFocus])
  // hideDropdown = ()=>{
  //     setIsFocus(true)
  // }

  const hideDropdown = () => {
    setIsFocus(false);
  };
  useOutSideClick(dropDownMenuRef, hideDropdown, isFocus);

  const handleSubmit = (e) => {
    history.push(`/TimKiemKhoaHoc/${searchItem.idCourses.trim()}`);
    // dispatch(timKiemKhoaHoc(searchItem))
  };

  // const logout = localStorage.getItem("userLogin");
  const Logout = () => {
    localStorage.removeItem("userLogin");
    dispatch(LOGOUTACTION());
    history.push("./DangNhap");
    setTimeout(() => {
      if (credential === null) {
        alert("Logout");
      }
    }, 200);
  };

  return (
    <div className="section-header ">
      <div className="container-fluid">
        <nav className="navbar navbar--custom navbar-expand-sm ">
          <Link to="/" className="navbar-brand mr-5" href="#">
            <img src="/img/logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-5 mr-auto mt-2 mt-lg-0">
              {/* <li  className="nav-item"><a >TRANG CHỦ</a></li>
              <li
                onClick={() => setIsFocus(!isFocus)}
                className="nav-item ml-4 mr-2 "
              >
                <div ref={dropDownMenuRef} className="nav-link px-2" href="#">
                  <i className="fa fa-th mr-2" />
                  Danh mục khóa học <i className="fa fa-caret-down ml-1" />
                </div>
                {isFocus ? (
                  <div className="category">
                    <ul>
                      {categoriesCourses.map((khoahoc, index) => {
                        // console.log(khoahoc);
                        return (
                          <li className="text-center" key={index}>
                            <a
                              onClick={() => {
                                history.push(
                                  `/DanhMucKhoaHoc/${khoahoc.maDanhMuc}`
                                );
                              }}
                            >
                              {khoahoc.tenDanhMuc}
                            </a>
                         
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li> */}
              {/* <li className="nav-item ml-5">
                <div className="form-inline my-2 my-lg-0">
                  <input
                    name="idCourses"
                    className="form-control"
                    type="text"
                    value={searchItem.idCourses}
                    placeholder="Search tên khóa học...."
                    onChange={handleChange}
                  />
                  <button
                    // to='/TimKiemKhoaHoc'
                    onClick={handleSubmit}
                    className=" btn--form"
                    type="button"
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </li>
              <li className="nav-item ml-5  ">
                <a href="" className="nav-link">
                  <div className="social">
                    <div> */}
              {/* <i className="fab fa-facebook-f" />
                      <i className="fab fa-gofore" />
                      <i className="fab fa-github" />
                      <i className="fab fa-twitter" /> */}
              {/* </div>
                  </div>
                </a>
              </li> */}
              {/* 
              {credential ? (
                <li className="nav-item nav-item-user  ">
                  <span className="nav-link">
                    <i className="fa fa-user" />
                    Welcom, {credential.taiKhoan}
                  </span>
                  <div className="logout">
                    <p
                      className="m-0"
                      onClick={() => {
                        history.push(`/ThongTinTaiKhoan`);
                      }}
                    >
                      Thông tin học viên
                    </p>
                    <p
                      onClick={() => {
                        Logout();
                      }}
                      className="m-0"
                    >
                      Đăng xuất
                    </p>
                  </div>
                </li>
              ) : (
                <>
                  <li className="nav-item  ">
                    <a
                      href=""
                      className="nav-link"
                      onClick={() => {
                        history.push(`/DangKy`);
                      }}
                    >
                      <button className="btn--signup">Đăng Ký</button>
                    </a>
                  </li>
                  <li className="nav-item ml-2 ">
                    <Link to="/DangNhap" href="" className="nav-link">
                      <button
                        onClick={() => {
                          history.push("/DangNhap");
                        }}
                        className="btn--signin"
                      >
                        Đăng Nhập
                      </button>
                    </Link>
                  </li> */}
              {/* </> */}
              {/* )} */}

              <li className="nav-item">
                <a className="nav-link" onClick={()=>{history.push("/")}}>
                  TRANG CHỦ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  KHÓA HỌC <i className="fa fa-caret-down" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TẠO CV VIỆC LÀM
                </a>
              </li>
            </ul>
            <div className="signin-signup text-right">
              {credential ? (
                <div className="name-user">
                  <div className="name">
                    <a>
                      <i className="fa fa-user mr-2" />
                      {credential.taiKhoan}
                    </a>
                  </div>
                  <div className="notification ml-3">
                    <i className="fa fa-bell" />
                  </div>
                  <div className="logout-setting ml-3">
                    <i className="fa fa-caret-down" />
                  </div>
                </div>
              ) : (
                <>
                  {" "}
                  <div className="signin">
                    <a
                      onClick={() => {
                        history.push("/DangNhap");
                      }}
                    >
                      Đăng Nhập
                    </a>
                  </div>
                  <div className="signup">
                    <a
                      onClick={() => {
                        history.push(`/DangKy`);
                      }}
                    >
                      Đăng Ký
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
