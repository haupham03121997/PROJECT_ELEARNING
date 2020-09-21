import * as type from "../Contanst/Courses";
import axios from "../Utils/axiosClient"
export const layChiTietKhoaHoc = () =>{
    return(dispatch) =>{
        dispatch({
            type: type.GET_COURSES_DETAIL_REQUEST
        })
        axios.get(
            "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=213122131"
        ).then((res)=>{
            dispatch({
                type : type.GET_COURSES_DETAIL_SUCCESS,
                payload:{
                    data: res.data
                }
            })
        }).catch((err)=>{
            dispatch({
                type: type.GET_COURSES_DETAIL_ERR
            })
        })
    }
}