// import React , {useState} from "react";
// import {useDispatch , useSelector} from 'react-redux';
// import {useHistory} from "react-router-dom";
// import { LOGOUTACTION} from "../../../Action/User"
// export default function HeaderAdmin() {
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const {credential} =  useSelector(state => state.UserReducer);
//     // const [isClickk , setIsClickk] = useState(false)
//     const [search , setSeaarch ] = useState({
//       searchID : ""
//     });
//     const handleChange = (evt) =>{
//       const { name, value } = evt.target;
//       // console.log("Tìm Kiếm Người Dùng" , e);
//       setSeaarch({
//         ...search ,
//         [name] : value
//       })
//       console.log(name , value);
//     }

//     const Logout = () =>{

//         dispatch(LOGOUTACTION());
//         history.push('/DangNhap')

//         setTimeout(()=>{
//             if(credential === null){
//                alert("Đăng xuất thành công!")
//             }
//         },200)
//     };

//   return (
//     <div>
//       <nav className="main-header navbar navbar-expand navbar-white navbar-light">
//         {/* Left navbar links */}
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a
//               className="nav-link"
//               data-widget="pushmenu"
//               href="#"
//               role="button"
//             >
//               <i className="fas fa-bars" />
//             </a>
//           </li>
//           <li className="nav-item d-none d-sm-inline-block">
//             <a href="" className="nav-link">
//               Home
//             </a>
//           </li>
//           <li className="nav-item d-none d-sm-inline-block">
//             <a href="#" className="nav-link">
//               Contact
//             </a>
//           </li>
//         </ul>
//         {/* SEARCH FORM */}
//         <form className="form-inline ml-3">
//           <div className="input-group input-group-sm">
//             <input
//             name="searchID"
//             value={search.searchID}
//             onChange={handleChange}
//               className="form-control form-control-navbar"
//               // type="search"

//               placeholder="Search"
//               aria-label="Search"
//             />
//             <div className="input-group-append">
//               <button
//               onClick={() => {
//                 history.push("/admin/user-management/nguoidung");
//               }}
//                className="btn btn-navbar" type="submit">
//                 <i className="fas fa-search" />
//               </button>
//             </div>
//           </div>
//         </form>
//         {/* Right navbar links */}
//         <ul className="navbar-nav ml-auto">
//           {/* Messages Dropdown Menu */}
//           <li className="nav-item dropdown">
//             <a className="nav-link" data-toggle="dropdown" >

//               <span className=" p-2 badge badge-success navbar-badge">
//             <i className="fa fa-user mr-3" />

//               Chào! {credential.hoTen}
//               </span>
//             </a>
//             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//               <a className="dropdown-item">
//                 {/* Message Start */}
//                 <div className="media">

//                   <div className="media-body">
//                     <h3 className="dropdown-item-title">

//                       <span className="float-right text-sm text-danger">
//                       Câp nhật thông tin <i className="fa fa-upload" />
//                       </span>
//                     </h3>

//                   </div>
//                 </div>
//                 {/* Message End */}
//               </a>
//               <div className="dropdown-divider" />
//               <a  onClick={() =>{ Logout()} }  className="dropdown-item">
//                 {/* Message Start */}
//                 <div className="media">

//                   <div className="media-body">
//                     <h3 className="dropdown-item-title">

//                       <p className="float-right text-sm text-muted">
//                       Đăng xuất
//                       </p>
//                     </h3>

//                   </div>
//                 </div>
//                 {/* Message End */}
//               </a>
//               {/* <div className="dropdown-divider" />

//               <div className="dropdown-divider" /> */}

//             </div>
//           </li>
//           {/* Notifications Dropdown Menu */}

//         </ul>
//       </nav>
//     </div>
//   );
// }
import React from "react";

export default function HeaderAdmin() {
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
            <a href="index3.html" className="nav-link">
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
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
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
              <i className="far fa-comments" />
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <i className="fas fa-th-large" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
