import axios from "../Utils/axiosClient";


export const  capNhatKhoaHoc =(values) => {
    return(dispatch)=>{
        dispatch({
            type : "CAP_NHAT_KHOA_HOC_REQUEST"
        })
        
    }
}
