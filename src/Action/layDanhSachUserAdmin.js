import * as Type  from "../Contanst/user";
import axios from "../Utils/axiosClient"; 

export const layDanhSachUser = () =>{
    return(dispatch) =>{
        dispatch({
            type : Type.GET_USER_All_LIST_REQUEST,
        });
        axios.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
        .then((result)=> {
            dispatch({
                type  : Type.GET_USER_All_LIST_SUCCESS , 
                payload  : {
                    data : result.data
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type : Type.GET_USER_All_LIST_ERR,
            })
        })
    }

}