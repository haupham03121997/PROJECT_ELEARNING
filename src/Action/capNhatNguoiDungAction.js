import * as Type from "../Contanst/user";
import axios from "../Utils/axiosClient";
import swal from "sweetalert";

export const CapNhatNguoiDungAction = (value) => {
  return (dispatch) => {
    dispatch({
      type: Type.UPDATE_USER_REQUEST,
    });
    axios
      .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", value)
      .then((result) => {
        dispatch({
          type: Type.UPDATE_USER_SUCCESS,
        });
        swal("Cập nhật", "Cập nhật thành công!", "success");
      })
      .catch((err) => {
        dispatch({
          type: Type.UPDATE_USER_ERR,
        });
      });
  };
};
