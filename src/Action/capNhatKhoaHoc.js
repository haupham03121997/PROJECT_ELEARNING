import axios from "../Utils/axiosClient";
import swal from "sweetalert"
export const  capNhatKhoaHoc =(values) => {
    return(dispatch)=>{
        dispatch({
            type : "CAP_NHAT_KHOA_HOC_REQUEST"
        })
        axios.post("/QuanLyKhoaHoc/CapNhatKhoaHocUpload" , values)
        .then((res)=>{
            dispatch({
                type : "CAP_NHAT_KHOA_HOC_SUCCESS"
            })
            swal("Cập nhật thành công!", {
                icon: "success",
                 
               });
        })
        .catch((err)=>{
            dispatch({
                type : "CAP_NHAT_KHOA_HOC_FAIL"
            })
            swal("Cập nhật thất bại!", {
                icon: "error",
                 
               });
        })
        
    }
}
