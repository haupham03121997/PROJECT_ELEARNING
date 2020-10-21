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
        swal("", "Thêm người dùng thành công!", "success");
      })
      .catch((err) => {
      
        dispatch({
 
          type: Type.ADD_USER_ERR,
        });
        // console.log('err' ,err);
        swal("", "Tài khoản hoặc email đã tồn tại", "error");
      });
  };
};
