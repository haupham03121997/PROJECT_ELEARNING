import axios from '../Utils/axiosClient';
import * as typeAction from '../Contanst/Courses'

export const getCoursesAction = () => {
    return (dispatch) => {
        dispatch({
            type: typeAction.GET_COURSES_LIST_REQUEST
        })
        axios.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
            .then((result) => {
                dispatch({
                    type: typeAction.GET_COURSES_LIST_SUCCESS,
                    payload: {
                        data: result.data
                    }
                    // console.log;
                })

            }).catch((err => {
                dispatch({
                    type: typeAction.GET_COURSES_LIST_ERR
                })
            }))
            .finally(() => {
                setTimeout(() => {
                    dispatch({
                        type: 'OFF_LOADING'
                    })
                }, 0);
            })
    }
}

export const getCoursesDetailAction = (maKhoaHoc) => {
    return (dispatch) =>{
        dispatch({
            type : typeAction.GET_COURSES_DETAIL_REQUEST,
        })
        axios.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
        .then((result)=>{
            dispatch({
                type: typeAction.GET_COURSES_DETAIL_SUCCESS,
                payload :{ 
                    data : result.data
                }   
            })
        })
        .catch((err) =>{
            dispatch({
                type: typeAction.GET_COURSES_DETAIL_ERR
            })
            console.log("Loi" , err);
        })
    }
}