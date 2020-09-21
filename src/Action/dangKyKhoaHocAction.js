import * as Type from "../Contanst/Courses";
import axios from "../Utils/axiosClient";
import swal from "sweetalert";
export const dangKyKhoaHocAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: Type.GHI_DANH_KHOA_HOC_REQUEST,
    });
    axios
      .post("/QuanLyKhoaHoc/DangKyKhoaHoc", values)
      .then((result) => {
        dispatch({
          type: Type.GHI_DANH_KHOA_HOC_SUCCESS,
          payload: {
            data: result.data,
          },
        });
        swal(
          "",
          "Đăng ký khóa học thành công! Bạn vui lòng đợi xét duyệt",
          "success"
        );
      })
      .catch((err) => {
        // console.log(err.response);
        dispatch({
          type: Type.GHI_DANH_KHOA_HOC_ERR,
        });
      });
  };
};
