import * as typeAction from "../Contanst/Courses";
import axios from "../Utils/axiosClient";

export const getCategoryAction = () => {
  return (dispatch, getState) => {
    dispatch({
      type: typeAction.GET_CATEGORY_COURSES_REQUEST,
    });
    axios
      .get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .then((result) => {
        dispatch({
          type: typeAction.GET_CATEGORY_COURSES_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: typeAction.GET_CATEGORY_COURSES_ERR,
        });
      });
  };
};
