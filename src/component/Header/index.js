import React, { useEffect, useState, useRef } from "react";
import { getCategoryAction } from "../../Action/danhMucKhoaHocAction";
import { LOGOUTACTION } from "../../Action/User";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { timKiemKhoaHoc } from "../../Action/timKiemKhoaHoc";
import { UserReducer } from "../../Reducer/UserReducer";
import Model from "../Model";
import swal from "sweetalert"
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
  // Hàm Scroll
  const [isScrolled, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setIsScroll(!isScrolled);
      } else {
        setIsScroll(isScrolled);
      }
    });
  }, []);
  const [isClicked, setIsClicked] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isSearched , setIsSearched] = useState(false);
  console.log(isSearched);
  const history = useHistory();
  const dropDownMenuRef = useRef();
  const dropDownMenuRef1 = useRef();
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
    console.log(name, value);
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
    dispatch(timKiemKhoaHoc(searchItem))
  };

  // const logout = localStorage.getItem("userLogin");
  const Logout = () => {
   
    swal({
      title: "Bạn muốn đăng xuất?",
      // text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
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

  const location = useLocation();


  return (
    <div
      className={
        isScrolled || location.pathname === "/DangNhap"
          ? "section-header scroll"
          : "section-header  mt-4"
      }
    >
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
              <li className="nav-item line active">
                <a
                  className="nav-link active"
                  onClick={() => {
                    history.push("/");
                  }}
                 
                >
                  TRANG CHỦ
                </a>
              </li>
              <li  className="nav-item line nav-item--custom">
                <a className="nav-link" >
                  KHÓA HỌC <i className="fa fa-caret-down" />
                </a>
               
                  <div    className="category">
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
                
              </li>
              <li className="nav-item line">
                <a className="nav-link" href="#">
                  LIÊN HỆ
                </a>
              </li>
              <li className="nav-item nav-item--search line">
                <a className="nav-link " href="#">
                      TÌM KIẾM KHÓA HỌC
                       <i className="fa fa-search" onClick={()=> setIsSearched(!isSearched) }></i>
                </a>
               { isSearched ? <div className="search__word">
                  <form onSubmit={handleSubmit}>
                      <input    name="idCourses"    value={searchItem.idCourses}
                    onChange={handleChange} type="text" placeholder="Tìm kiếm ở đây..."/>
                  </form>
                </div> : ""}
              </li>
            </ul>
            <div className="signin-signup text-right">
              {credential ? (
                <div className="name-user">
                  <div className="name">
                    <div className="avatar">
                      <img src="/img/avatar.png" alt="avatar" />
                    </div>
                    <a className="pl-2">
                      {/* <i className="fa fa-user mr-2" /> */}

                      {credential.taiKhoan}
                    </a>
                  </div>
                  <div className="notification ml-3">
                    <i className="fa fa-bell" />
                  </div>
                  <div onClick={() => setIsFocus(!isFocus)} className="logout-setting ml-3">
                    <i
                     ref={dropDownMenuRef}
                      className="fa fa-caret-down"
                    />
                    {isFocus ? (
                      <div  className="logout text-left">
                        <ul>
                          <li onClick={()=>{
                            history.push("/caidat/taikhoan")
                          }}>
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
