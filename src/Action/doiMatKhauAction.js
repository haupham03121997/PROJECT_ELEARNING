import * as Type from "../Contanst/user";
import * as type from "../Contanst/Courses";
import axios from "../Utils/axiosClient";
import swal from "sweetalert";
export const DoiMatKhauAction = (value) => {
  const getUser = JSON.parse(localStorage.getItem("userLogin"));
  const signin = { taiKhoan: value.taiKhoan, matKhau: value.matKhau };
  return (dispatch) => {
    dispatch({
      type: Type.CHANGE_PASSWORD_REQUEST,
    });
    axios
      .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", value)
      .then((result) => {
        dispatch({
          type: Type.CHANGE_PASSWORD_SUCCESS,
          payload: result.data,
        });
        axios
          .post("/QuanLyNguoiDung/DangNhap", signin)
          .then((res) => {
            dispatch({
              type: type.SIGNIN_SUCCESS,
              payload: {
                data: result.data,
              },
            });  localStorage.setItem("userLogin", JSON.stringify(result.data));
          })
          .catch(() => {});
        localStorage.setItem("userLogin", JSON.stringify(getUser));
        swal({
          icon: "success",
          title: "Đổi mật khẩu thành công!",
        });
      })
      .catch((err) => {
        dispatch({
          type: Type.CHANGE_PASSWORD_ERR,
        });
        swal({
          icon: "error",
          title: "Đổi mật khẩu thất bại!",
        });
      });
  };
};
