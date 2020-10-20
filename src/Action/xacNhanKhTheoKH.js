import React from "react";
import axiox from "../Utils/axiosClient";
import swal from "sweetalert";
export const xacNhanKhTheoKH = (values) => {
  return (dispatch) => {
    dispatch({
      type: "XAC_NHAN_KHOA_HOC_REQUEST",
    });
    axiox.post("/QuanLyKhoaHoc/GhiDanhKhoaHoc" , values).then((res)=>{
        dispatch({
            type: "XAC_NHAN_KHOA_HOC_SUCESS",
            payload : {
                data : res.data
            }
        });
        swal("Ghi danh thành công!", "success");
    }).catch((err)=>{
        dispatch({
            type: "XAC_NHAN_KHOA_HOC_ERR",
        });
        swal("Thất bại", "Ghi danh không thành công!", "error");

    });
  };
}
