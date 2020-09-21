import * as Type from "../Contanst/Courses";
import axios from "../Utils/axiosClient";

export const SignupAction = (value) => {
  return (dispatch) => {
    dispatch({
      type: Type.SIGNUP_REQUEST,
    });
    axios
      .post("/QuanLyNguoiDung/DangKy", value)
      .then((result) => {
        localStorage.setItem("userSign", JSON.stringify(result.data));
        dispatch({
          type: Type.SIGNUP_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: Type.SIGNUP_ERR,
        });
      });
  };
};
