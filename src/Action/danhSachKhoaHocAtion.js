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
export const getCoursesPaginationAction = (currentPage) => {
    return (dispatch) => {
        dispatch({
            type: typeAction.GET_COURSES_LIST_PAGIN_REQUEST
        })
        axios.get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=7&MaNhom=GP01`)
            .then((result) => {
                dispatch({
                    type: typeAction.GET_COURSES_LIST_PAGIN_SUCCESS,
                    payload: {
                        data: result.data
                    }
                    // console.log;
                })

            }).catch((err => {
                dispatch({
                    type: typeAction.GET_COURSES_LIST_PAGIN_ERR
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