import * as Type from "../Contanst/Courses";
import axios from "../Utils/axiosClient";

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
      })
      .catch((er) => {
        dispatch({
          type: Type.XOA_KHOA_HOC_ERRR,
        });
      });
  };
};
