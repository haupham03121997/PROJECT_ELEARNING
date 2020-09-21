import * as type from "../Contanst/Courses";
import axios, { setToken } from "../Utils/axiosClient";
import swal from "sweetalert";
export const Login = (value) => {
  return (dispatch) => {
    dispatch({
      type: type.SIGNIN_REQUEST,
    });
    axios
      .post("/QuanLyNguoiDung/DangNhap", value)
      .then((result) => {
        dispatch({
          type: type.SIGNIN_SUCCESS,
          payload: {
            data: result.data,
          },
        });
        localStorage.setItem("userLogin", JSON.stringify(result.data));
        //setToken Authorization lên headers
        // setToken(result.data.accessToken);
        // console.log("setToken" ,setToken);
        // const localStorage = localStorage.getItem("userLogin");
        // console.log("localStorage" , localStorage.accessToken);
        swal("", "Đăng Nhập Thành công!", "success");
      })
      .catch((err) => {
        dispatch({
          type: type.SIGNIN_ERR,
        });
      });
  };
};

export const LOGOUTACTION = () => {
  return (dispatch) => {
    // swal({
    //   title: "Bạn muốn đăng xuất tài khoản?",
    //   // text: "Once deleted, you will not be able to recover this imaginary file!",
    //   // icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // })
    // .then((willDelete) => {
    //   if (willDelete) {
       
    //     swal("Đã đăng xuất!", {
    //       icon: "success",
    //     });
    //   } else {
    //     swal("Ở lại!");
    //   }
    // });
    dispatch({
      type: type.LOGOUT,
      
    });
    // localStorage.clear("userLogin");
    swal("Đã Đăng Xuất!");
  };
};

export const GetUserInfoAction = (user) => {
  return (dispatch) => {
    dispatch({
      type: type.GET_USER_INFOR_REQUEST,
    });
    axios
      .get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${user}`)
      .then((result) => {
        dispatch({
          type: type.GET_USER_INFOR_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: type.GET_USER_INFOR_ERR,
        });
      });
  };
};
