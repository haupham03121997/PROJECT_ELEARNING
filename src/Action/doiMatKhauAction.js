import * as Type from '../Contanst/user'
import axios from "../Utils/axiosClient"
export const DoiMatKhauAction = (value) =>{
    return(dispatch)=>{
            dispatch({
                type : Type.CHANGE_PASSWORD_REQUEST
            })
            axios.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung" , value)
            .then((result)=>{
                dispatch({
                    type  : Type.CHANGE_PASSWORD_SUCCESS,
                    payload :result.data
                })
                localStorage.setItem("userLogin" , JSON.stringify(result.data));
            })
            .catch((err)=>{
                dispatch({
                    type : Type.CHANGE_PASSWORD_ERR
                })
            })
    }
}