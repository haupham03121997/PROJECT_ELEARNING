import React, { useEffect, useState, useRef } from "react";
import { getCategoryAction } from "../../Action/danhMucKhoaHocAction";
import { LOGOUTACTION  , LOGOUFACEBOOKTACTION} from "../../Action/User";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory} from "react-router-dom";
import BackToTop from "../../component/BackToTop";
import PhoneCall from "../../component/PhoneCall/phonecall";
import swal from "sweetalert";
function useOutSideClick(ref, callback, when) {
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
  const history = useHistory();
  const dropDownMenuRef = useRef();
  // Hàm Scroll
  const [isScrolled, setIsScroll] = useState(false);
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      if (!isTop) {
        setIsScroll(!isScrolled);
      } else {
        setIsScroll(isScrolled);
      }
    });
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setBackToTop(!backToTop);
      } else {
        setBackToTop(backToTop);
      }
    });
  }, []);
  const [isFocus, setIsFocus] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isClickCourses, setIClickCourses] = useState(false);
  const [searchItem, setSearch] = useState({ idCourses: "" });
  const [isClickResponsive, setIsClickResponsive] = useState(false);
  const [isActive, setIsActive] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    //Call api lấy danh mục khóa học
    dispatch(getCategoryAction());
  }, []);
  const { categoriesCourses } = useSelector(
    (state) => state.getCategoriesCourses
  );
  const { credential } = useSelector((state) => state.UserReducer);
  // const shopCart =JSON.parse( localStorage.getItem("giohang"));
  const { credentialFacebook } = useSelector((state) => state.UserReducer);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setSearch({
      ...searchItem,
      [name]: value,
    });
    console.log(name, value);
  };

  const hideDropdown = () => {
    setIsFocus(false);
  };
  useOutSideClick(dropDownMenuRef, hideDropdown, isFocus);
  // const handleSubmit = (e) => {
  //   dispatch(timKiemKhoaHoc(searchItem));
  // };
  const {danhSachKH} = useSelector(state => state.ThemKhoaHocReducer); 
  // console.log("giohang" ,giohang);
  // const logout = localStorage.getItem("userLogin");
  const Logout = () => {
    swal({
      title: "Bạn muốn đăng xuất?",
      // text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("userLogin");
        dispatch(LOGOUTACTION());

        swal("Đăng xuất thành công!", {
          icon: "success",
        });
        history.push("./DangNhap");
      } else {
      }
    });
  };
  const LogoutFacebook = () => {
    swal({
      title: "Bạn muốn đăng xuất?",
      // text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("userLoginFacebook");
        dispatch(LOGOUFACEBOOKTACTION());

        swal("Đăng xuất thành công!", {
          icon: "success",
        });
        history.push("./DangNhap");
      } else {
      }
    });
  };
  return (
    <>
      <div
        className="section-header header-shopping"
      >
        <div className="container-fluid">
          <nav className="navbar navbar--custom   navbar-expand-lg  ">
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
              <span
                class="navbar-toggler-icon pt-1"
                onClick={() => setIsClickResponsive(!isClickResponsive)}
              >
                <i class="fa fa-bars"></i>
              </span>
            </button>
            {isClickResponsive ? (
              <div className="collapse-resposive collapse-resposive-transion">
                {credential ? (
                  <div
                    onClick={() => {
                      history.push("/caidat/taikhoan");
                    }}
                    style={{ cursor: "pointer" }}
                    className="name"
                  >
                    <div className="name-res">
                      <div className="avatar">
                        <img src="/img/avatar.png" alt="avatar" />
                      </div>
                      <a className="pl-2">
                        {/* <i className="fa fa-user mr-2" /> */}

                        {credential.taiKhoan}
                      </a>
                    </div>
                    <i
                      onClick={() => setIsClickResponsive(!isClickResponsive)}
                      className="fa fa-angle-right"
                    ></i>
                  </div>
                ) : (
                  <div className="responsive-top">
                    <Link to="/" className="navbar-brand mr-5" href="#">
                      <img src="/img/logo2.png" alt="" />
                    </Link>
                    <i
                      onClick={() => setIsClickResponsive(!isClickResponsive)}
                      className="fa fa-angle-right"
                    ></i>
                  </div>
                )}

                <ul className="navbar-nav-res">
                  <li className="nav-item-res  active">
                    <a
                      className="nav-link active"
                      onClick={() => {
                        history.push("/");
                        setIsClickResponsive(!isClickResponsive);
                      }}
                    >
                      <i className="fa fa-home "></i> Trang Chủ
                    </a>
                  </li>
                  <li
                    className="nav-item-res-courses line nav-item--custom"
                    onClick={() => {
                      setIClickCourses(!isClickCourses);
                    }}
                  >
                    <a className="nav-link">
                      <span>
                        <i className="fa fa-book mr-2"></i> Khóa Học
                      </span>
                      {/* <i className="fa fa-caret-down ml-2" /> */}
                    </a>
                    {isClickCourses ? (
                      <ul className="dropdown-cate-res">
                        {categoriesCourses.map((khoahoc, index) => {
                          return (
                            <li
                              key={index}
                              onClick={() => {
                                history.push(
                                  `/DanhMucKhoaHoc/${khoahoc.maDanhMuc}`
                                );
                                setIsClickResponsive(!isClickResponsive);
                              }}
                            >
                              <a className="nav-link-res">
                                <i className="fa fa-angle-right"></i>{" "}
                                {khoahoc.tenDanhMuc}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  <li
                    className="nav-item-res "
                    onClick={() => {
                      history.push("/lienhe");
                    }}
                  >
                    <a
                      className="nav-link "
                      onClick={() => {
                        history.push("/lienhe");
                        setIsClickResponsive(!isClickResponsive);
                      }}
                    >
                      <i className="fa fa-phone-square"></i>Liên hệ
                    </a>
                  </li>

                  <li className="nav-item-res  active">
                    <a className="nav-link ">
                      <i className="fa fa-adjust"></i>Giao diện tối
                    </a>
                  </li>

                  {credential ? (
                    <>
                      <li
                        onClick={() => {
                          history.push("/caidat/taikhoan");
                        }}
                        className="nav-item-res  active"
                      >
                        <a className="nav-link ">
                          <i className="fa fa-cog"></i>Cài đặt
                        </a>
                      </li>
                      <li
                        onClick={() => {
                          Logout();
                        }}
                        className="nav-item-res  active"
                      >
                        <a className="nav-link ">
                          <i className="fa fa-sign-out"></i>Đăng Xuất
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      {" "}
                      <li className="nav-item-res  active">
                        <a
                          className="nav-link "
                          onClick={() => {
                            history.push(`/DangKy`);
                          }}
                        >
                          <i className="fa fa-user-plus"></i>Đăng Ký
                        </a>
                      </li>
                      <li className="nav-item-res  active">
                        <a
                          className="nav-link "
                          onClick={() => {
                            history.push("/DangNhap");
                          }}
                        >
                          <i class="fa fa-sign-in"></i>Đăng Nhập1
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            ) : (
              ""
            )}

            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ml-md-5 ml-xs-1  mr-auto mt-2 mt-lg-0">
                <li className="nav-item line active">
                  <a
                    className={isActive === 1 ? "nav-link active" : "nav-link"}
                    onClick={() => {
                      history.push("/");
                      setIsActive(1);
                    }}
                  >
                    <i className="fa fa-home "></i> Trang Chủ
                  </a>
                </li>
                <li className="nav-item line nav-item--custom">
                  <a
                    className={isActive === 2 ? " nav-link active" : "nav-link"}
                  >
                    <i className="fa fa-book "></i> Khóa Học
                    <i className="fa fa-caret-down ml-2" />
                  </a>
                  <ul className="dropdown-cate">
                    {categoriesCourses.map((khoahoc, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            history.push(
                              `/DanhMucKhoaHoc/${khoahoc.maDanhMuc}`
                            );
                            setIsActive(2);
                          }}
                        >
                          <i className="fa fa-angle-right"></i>{" "}
                          {khoahoc.tenDanhMuc}
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item line">
                  <a
                    className={isActive === 3 ? "nav-link active" : "nav-link"}
                    onClick={() => {
                      history.push("/lienhe");
                      setIsActive(3);
                    }}
                  >
                    <i className="fa fa-phone-square"></i> Liên Hệ
                  </a>
                </li>
                <li
                  className="nav-item nav-item--search line"
                  onClick={() => {
                    setIsActive(4);
                  }}
                >
                  <i className="fa fa-search"></i>
                  <a
                    onClick={() => {
                      setIsSearched(!isSearched);
                    }}
                    className={
                      isActive === 4 ? "nav-link active " : "nav-link "
                    }
                  >
                    Tìm Kiếm Khóa Học
                  </a>
                  {isSearched ? (
                    <div className="search-popup">
                      <div className="search__dialog"></div>
                      <div className="search__border">
                        <div className="search__content">
                          <div className="search__content__detail animate__animated animate__bounce animate__zoomIn">
                            <h2>NHẬP TỪ KHÓA TÌM KIẾM</h2>
                            <form>
                              <input
                                name="idCourses"
                                value={searchItem.idCourses}
                                onChange={handleChange}
                                type="text"
                                placeholder="Tìm kiếm ở đây..."
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setIsSearched(false);
                                  history.push(
                                    `/TimKiemKhoaHoc/${searchItem.idCourses.trim()}`
                                  );
                                }}
                                className="btn-search"
                              >
                                Tìm kiếm
                              </button>
                            </form>
                            <a
                              onClick={() => {
                                setIsSearched(false);
                              }}
                              className="close"
                            >
                              <i className="fa fa-times"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
              <div className="signin-signup text-right">
              {credential ? (
                  <div className="name-user">
                    <div
                      onClick={() => {
                        history.push("/caidat/taikhoan");
                      }}
                      style={{ cursor: "pointer" }}
                      className="name"
                    >
                      <div className="avatar">
                        <img src="/img/avatar.png" alt="avatar" />
                      </div>
                      <a className="pl-2">{credential.taiKhoan}</a>
                    </div>
                    <div className="shopping-cart ml-3">
                      <span
                        className="shopping"
                        onClick={() => {
                          history.push("/giohang");
                        }}
                      >
                        <i className="fa fa-shopping-cart"></i>
                        <span className="count-shopping">
                          {danhSachKH.length}
                        </span>
                      </span>
                    </div>
                    <div className="notification ml-3">
                      <i className="fa fa-bell" />
                    </div>
                    <div
                      onClick={() => setIsFocus(!isFocus)}
                      className="logout-setting ml-3"
                    >
                      <i
                        ref={dropDownMenuRef}
                        className="fa fa-caret-down mb-1"
                      />
                      {isFocus ? (
                        <div className="logout text-left">
                          <ul>
                            <li
                              onClick={() => {
                                history.push("/caidat/taikhoan");
                              }}
                            >
                              <a className="mx-4">
                                <i className="fa fa-cog mr-3" />
                                Cài đặt
                              </a>
                            </li>

                            <li
                              onClick={() => {
                                Logout();
                              }}
                            >
                              <a className="mx-4">
                                <i className="fa fa-sign-language mr-3" />
                                Đăng xuất
                              </a>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : credentialFacebook ? (
                  <div className="name-user">
                    <div
                      onClick={() => {
                        history.push("/caidat/taikhoan");
                      }}
                      style={{ cursor: "pointer" }}
                      className="name"
                    >
                      <div className="avatar-facebook">
                        <img src={credentialFacebook.picture.data.url} alt="avatar" />
                      </div>
                      <a className="pl-2">{credentialFacebook.name}</a>
                    </div>
                    <div className="shopping-cart ml-3">
                      <span
                        className="shopping"
                        onClick={() => {
                          history.push("/giohang");
                        }}
                      >
                        <i className="fa fa-shopping-cart"></i>
                        <span className="count-shopping">
                          {danhSachKH.length}
                        </span>
                      </span>
                    </div>
                    <div className="notification ml-3">
                      <i className="fa fa-bell" />
                    </div>
                    <div
                      onClick={() => setIsFocus(!isFocus)}
                      className="logout-setting ml-3"
                    >
                      <i
                        ref={dropDownMenuRef}
                        className="fa fa-caret-down mb-1"
                      />
                      {isFocus ? (
                        <div className="logout text-left">
                          <ul>
                            <li
                              onClick={() => {
                                history.push("/caidat/taikhoan");
                              }}
                            >
                              <a className="mx-4">
                                <i className="fa fa-cog mr-3" />
                                Cài đặt
                              </a>
                            </li>

                            <li
                              onClick={() => {
                                LogoutFacebook();
                              }}
                            >
                              <a className="mx-4">
                                <i className="fa fa-sign-language mr-3" />
                                Đăng xuất
                              </a>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="signin">
                      <a
                        onClick={() => {
                          history.push("/DangNhap");
                        }}
                      >
                        <i className="fa fa-sign-in"></i>
                        Đăng Nhập
                      </a>
                    </div>
                    <div className="signup">
                      <a
                        onClick={() => {
                          history.push(`/DangKy`);
                        }}
                      >
                        <i className="fa fa-user-plus"></i> Đăng Ký
                      </a>
                    </div>
                  </>
                )}              </div>
            </div>
          </nav>
          {backToTop ? <BackToTop /> : ""}
          <PhoneCall />
        </div>
      </div>
      {/* <div className="navbar-collapse--custom">adasdas</div> */}
    </>
  );
}
