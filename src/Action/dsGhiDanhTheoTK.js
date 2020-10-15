import axios from "../Utils/axiosClient";
import * as Type from "../Contanst/user";

export const DSKHDaGhiDanh = (username) => {
  return (dispatch) => {
    dispatch({
      type: Type.DSKH_DA_GHI_DANH_REQUEST,
    });
    axios
      .post("QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",  username)
      .then((response) => {
        // console.log("response đã ghi danh" , response);
        dispatch({
          type: Type.DSKH_DA_GHI_DANH_SUCCESS,
          payload: {
            data: response.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: Type.DSKH_DA_GHI_DANH_ERR,
        });
      });
  };
};

// Action lấy danh sách người dùng chưa ghi danh vào khóa học theo tài khoản
export const DSKHChuaGhiDanh = (usernName) =>{
  return (dispatch) => {
    dispatch({
      type: Type.DSKH_CHUA_GHI_DANH_REQUEST
    });
    axios
      .post(`/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${usernName}`)
      .then((response) => {
        console.log("response chưa ghi danh" , response);
        dispatch({
          type: Type.DSKH_CHUA_GHI_DANH_SUCCESS ,
          payload: {
            data: response.data,
          },
        });
      })
      .catch((error) => {
        console.log("error" , error);
        dispatch({
          type: Type.DSKH_CHUA_GHI_DANH_ERR,

        });
      });
  };
}

// Action lấy danh sách người dùng đang chờ xét duyệt
export const DSKHChoGhiDanh = (usernName) =>{
  return (dispatch) => {
    dispatch({
      type: Type.DSKH_CHO_GHI_DANH_REQUEST
    });
    axios
      .post("QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",  usernName)
      .then((response) => {
        console.log("response cHỜ ghi danh" , response);
        dispatch({
          type: Type.DSKH_CHO_GHI_DANH_SUCCESS,
          payload: {
            data: response.data,
          },
        });
      })
      .catch((error) => {
        console.log("error" , error);
        dispatch({
          type: Type.DSKH_CHO_GHI_DANH_ERR

        });
      });
  };
}
// Action xác nhận khóa học
export const XacNhanKhoaHoc = (value) =>{
  return (dispatch) => {
    dispatch({
      type: "GHI_DANH_KHOA_HOC_REQUEST"
    });
    axios
      .post("QuanLyKhoaHoc/GhiDanhKhoaHoc",  value)
      .then((response) => {
        console.log("response cHỜ ghi danh" , response);
        dispatch({
          type: "GHI_DANH_KHOA_HOC_SUCCESS",
          payload: {
            data: response.data,
          },
        });
      })
      .catch((error) => {
        console.log("error" , error);
        dispatch({
          type: "GHI_DANH_KHOA_HOC_ERR"

        });
      });
  };
}