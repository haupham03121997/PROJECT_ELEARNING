import * as Type from "../Contanst/user";
import axios from "../Utils/axiosClient";
import swal from "sweetalert";
export const themNguoiDungAction = (values) => {
  return (dispatch, getState) => {
    dispatch({
      type: Type.ADD_USER_REQUEST,
    });
    axios
      .post("/QuanLyNguoiDung/ThemNguoiDung", values)
      .then((res) => {
        dispatch({
          type: Type.ADD_USER_SUCCESS,
          payload: {
            data: res.data,
          },
        });
        swal("", "Đăng Ký Thành công!", "success");
      })
      .catch((err) => {
        dispatch({
          type: Type.ADD_USER_ERR,
        });
      });
  };
};
