import React , {useState} from "react";
import {useDispatch , useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";
import { LOGOUTACTION} from "../../../Action/User"
export default function HeaderAdmin() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {credential} =  useSelector(state => state.UserReducer);
    // const [isClickk , setIsClickk] = useState(false)
    const [search , setSeaarch ] = useState({
      searchID : ""
    });
    const handleChange = (evt) =>{
      const { name, value } = evt.target;
      // console.log("Tìm Kiếm Người Dùng" , e);
      setSeaarch({
        ...search , 
        [name] : value
      })
      console.log(name , value);
    }

    const Logout = () =>{
        
        dispatch(LOGOUTACTION());
        history.push('/DangNhap')
      
        setTimeout(()=>{
            if(credential === null){
               alert("Đăng xuất thành công!")
            }
        },200)
    };
  

  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        {/* SEARCH FORM */}
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
            name="searchID"
            value={search.searchID}
            onChange={handleChange}
              className="form-control form-control-navbar"
              // type="search"
             
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button 
              onClick={() => {
                history.push("/admin/user-management/nguoidung");
              }}
               className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
             
              <span className=" p-2 badge badge-success navbar-badge">
            <i className="fa fa-user mr-3" />

              Chào! {credential.hoTen}
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                 
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                  
                      <span className="float-right text-sm text-danger">
                      Câp nhật thông tin <i className="fa fa-upload" />
                      </span>
                    </h3>
    
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a  onClick={() =>{ Logout()} } href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                     
                      <p className="float-right text-sm text-muted">
                      Đăng xuất
                      </p>
                    </h3>
                
                  </div>
                </div>
                {/* Message End */}
              </a>
              {/* <div className="dropdown-divider" />
          
              <div className="dropdown-divider" /> */}

            </div>
          </li>
          {/* Notifications Dropdown Menu */}
         
           
        </ul>
      </nav>
    </div>
  );
}
