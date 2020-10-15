import * as Type from "../Contanst/Courses";
import axios from "../Utils/axiosClient"; 

export const DSNguoiDungChoXetDuyetTHeoKhoaHoc = (value) =>{
    return(dispatch) =>{
        dispatch({
            type : Type.DANH_SACH_CHO_XET_DUYET_THEO_MA_REQUEST,
        });
        axios.post("/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet" ,value)
        .then((result)=> { 
            dispatch({
                type  : Type.DANH_SACH_CHO_XET_DUYET_THEO_MA_SUCCESS , 
                payload  : {
                    data : result.data
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type :Type.DANH_SACH_CHO_XET_DUYET_THEO_MA_ERR,
            })
        })
    }

}
export const DSNguoiDungDaGhiDanhTheoKhoaHoc = value =>{
    return(dispatch) =>{
       dispatch({
        type : Type.DANH_SACH_DA_XET_DUYET_THEO_MA_REQUEST,
       })
       axios.post("/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc" , value)
       .then((res)=>{
        dispatch({
            type : Type.DANH_SACH_DA_XET_DUYET_THEO_MA_SUCCESS, 
            payload : {
                data : res.data
            }
        })
       })
       .catch((err)=>{
            dispatch({
                type : Type.DANH_SACH_DA_XET_DUYET_THEO_MA_ERR
            })
       })
    }
}

export const DSNguoiDungChuaGhiDanhTheoKhoaHoc = value =>{
    return(dispatch) =>{
       dispatch({
        type : Type.DANH_SACH_CHƯA_XET_DUYET_THEO_MA_REQUEST,
       })
       axios.post("QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh" , value)
       .then((res)=>{
        dispatch({
            type : Type.DANH_SACH_CHƯA_XET_DUYET_THEO_MA_SUCCESS, 
            payload : {
                data : res.data
            }
        })
       })
       .catch((err)=>{
            dispatch({
                type : Type.DANH_SACH_CHƯA_XET_DUYET_THEO_MA_ERR
            })
       })
    }
}