
import * as Type from '../Contanst/Courses';
import axios from '../Utils/axiosClient'


export const timKiemKhoaHoc = (tenkhoahoc) => {
    return (dispatch) => {

        dispatch({
         type : Type.SEARCH_COURSES_REQUEST,
        })
        axios.get(
            `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenkhoahoc}&MaNhom=GP01`,

        ).then((result) =>{
            dispatch({
                type: Type.SEARCH_COURSES_SUCCESS,
                payload:{
                    data : result.data
                }
            })
        }).catch((err) =>{
            dispatch({
                type: Type.SEARCH_COURSES_ERR
            })
        })

    }
}
