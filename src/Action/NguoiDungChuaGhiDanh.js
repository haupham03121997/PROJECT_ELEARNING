import axios from "../Utils/axiosClient"; 

export const chuaghidanhaction = (value) =>{
    return(dispatch) =>{
        dispatch({
            type : "Chua_ghi_danh_ri_quet",
        });
        axios.post("QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh" ,value)
        .then((result)=> {
            dispatch({
                type  : "Chua_ghi_danh_sut_set" , 
                payload  : {
                    data : result.data
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type : "Chua_ghi_danh_loi",
            })
        })
    }

}