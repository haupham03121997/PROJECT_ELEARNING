import React from 'react'
import axios from "../Utils/axiosClient"
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

            localStorage.removeItem(values.maKhoaHoc);
        }).catch((err)=>{
            dispatch({
                type : "HUY_KHOA_HOC_ERR"
            })
        })
    }
}
