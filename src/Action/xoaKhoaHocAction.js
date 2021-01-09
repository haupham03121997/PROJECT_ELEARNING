import * as Type from "../Contanst/Courses";
import axios from "../Utils/axiosClient";
import swal from "sweetalert"
export const xoaKhoaHocAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: Type.XOA_KHOA_HOC_REQUEST,
    });
    // async () => {
    //   let res = await axios.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`);
    // };
    axios
      .delete(`/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`)
      .then((res) => {
        dispatch({
          type: Type.XOA_KHOA_HOC_SUCCESS,
        });
        swal("Xóa thành công!", {
          icon: "success",
        });
      })
      .catch((er) => {
        dispatch({
          type: Type.XOA_KHOA_HOC_ERRR,
        });
        swal("Khóa học đã được ghi danh! Không thể xóa!", {
          icon: "error",
           
         });
      });
  };
};

export const XoaKhoaHocLocalStorage = (id)=>{
  return(dispatch) =>{
      dispatch({
        type: Type.XOA_KHOA_HOC_LOCAL_SUCCESS, 
          id
      })
  }
}


