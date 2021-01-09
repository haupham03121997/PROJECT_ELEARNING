import React from 'react'
import axios from "../Utils/axiosClient"
import swal from "sweetalert"
export const  huyKHTheoKh =(values)=> {
    // console.log("values" ,values.maKhoaHoc);
    return(dispatch) => {
        dispatch({
            type : "HUY_KHOA_HOC_REQUEST"
        })
        axios.post("/QuanLyKhoaHoc/HuyGhiDanh" , values).then((res)=>{
            dispatch({
                type : "HUY_KHOA_HOC_SUCCESS"
            })
            swal("Hủy thành công!", {
                icon: "success",
               });
            localStorage.removeItem(values.maKhoaHoc);
            // dispatch({
            //         type : "HUY_KHOA_HOC_DA_DANG_kY",
            //         values
            // })
        }).catch((err)=>{
            dispatch({
                type : "HUY_KHOA_HOC_ERR"
            })
            swal("Hủy không thành công!", {
                icon: "error",
                 
               });
        })
    }
}

// export const HuyKhDaDangKy = (values)=>{
//     console.log("values" , values);
//     return(dispatch)=>{
     
//     }
// } 