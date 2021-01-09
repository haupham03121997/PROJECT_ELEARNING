import * as Type from "../Contanst/Courses";
import axios from "../Utils/axiosClient";
import swal from "sweetalert";
export const dangKyKhoaHocAction = (values) => {
  return (dispatch) => {
    console.log("values " , values);
    dispatch({
      type: Type.GHI_DANH_KHOA_HOC_REQUEST,
    });
    axios
      .post("/QuanLyKhoaHoc/DangKyKhoaHoc", values)
      .then((result) => {
        console.log(result);
        dispatch({
          type: Type.GHI_DANH_KHOA_HOC_SUCCESS,
          payload: {
            data: result.config.data,
          },
        });
        swal(
          "",
          "Đăng ký khóa học thành công! Bạn vui lòng đợi xét duyệt",
          "success"
        );
        localStorage.setItem(values.maKhoaHoc, JSON.stringify(result.data));
      })
      .catch((err) => {
        // console.log(err.response);
        dispatch({
          type: Type.GHI_DANH_KHOA_HOC_ERR,
        });
      });
  };
};
// export const NGuoiDungDangKyKhoaHoc = (values)=>{
//     return(dispatch)=>{
//       console.log("Người dùng đăng ký khóa học" , values);
//       dispatch({
//         type : "NGUOI_DUNG_DANG_KY_KHOA_HOC",
//         values
//       })
//     }
// }
