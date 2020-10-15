import * as Type from "../Contanst/user";
import axios from "../Utils/axiosClient";

export const timKiemNguoiDungAction = (tuKhoa) =>{
    return(dispatch)=>{
        dispatch({
            type : Type.SEARCH_USER_REQUEST,
        })
        axios.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`)
        .then((res)=>{
            dispatch({
                type: Type.SEARCH_USER_SUCCESS,
                payload: {
                    data : res.data,
                }
            })
            console.log("res" , res);
        })
        .catch((err)=>{
            dispatch({
                type : Type.SEARCH_USER_ERR,
            })
        });

    }

}