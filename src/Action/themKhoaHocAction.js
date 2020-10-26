import axios from "../Utils/axiosClient";
import * as Type from "../Contanst/Courses";
import ShowToast from "../Pages/Admin/Showtoast"
import swal from "sweetalert";
export const ThemKhoaHocAction = (value) => {
  
  return (dispatch) => {
    dispatch({
      type: Type.THEM_KHOA_HOC_SUCCESS,
    });
    // let frm = new FormData();
    // for (let key in value) {
    //   frm.append(key, value[key]);
    //   console.log("tên phim" , frm.get(key)
    // }
    axios
      .post("QuanLyKhoaHoc/ThemKhoaHocUploadHinh", value)
      .then((res) => {
        console.log(res);
        dispatch({
          type: Type.THEM_KHOA_HOC_SUCCESS,
        });
        swal("", "Thêm Thành công!", "success");
      })
      .catch((err) => {
      
        dispatch({
          type: Type.THEM_KHOA_HOC_FAIL,

        });
        console.log("err" , err);
        swal("", "Thêm thất bại!", "error");
      });
  };
};
