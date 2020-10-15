import * as type from "../Contanst/user";
import axios from "../Utils/axiosClient";

export const layDanhSachNguoiDungAction = (currentPage) => {
  return (dispatch, getState) => {
    dispatch({
      type: type.GET_USER_LIST_REQUEST,
    });
    axios
      .get(
        `/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=${currentPage}&pageSize=8`
      )
      .then((result) => {
        dispatch({
          type: type.GET_USER_LIST_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: type.GET_USER_LIST_ERR,
        });
      });
  };
};
export const NextPagesAtion = (pages) => {
  return (dispatch, getState) => {};
};
