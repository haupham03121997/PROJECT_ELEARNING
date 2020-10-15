import axios from '../Utils/axiosClient';
import * as TypeAction from '../Contanst/Courses';

export const layDanhMucKhoaHocAction = (maDanhMuc) => {
    return (dispatch) => {
        dispatch({
            type: TypeAction.GET_CATEGORY_COURSES_DETAIL_REQUEST,
        })

        axios.get(`/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?=${maDanhMuc}&MaNhom=GP01`)
            .then((result) => {
                dispatch({
                    type: TypeAction.GET_CATEGORY_COURSES_DETAIL_SUCCESS,
                    payload : {
                        data : result.data
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: TypeAction.GET_CATEGORY_COURSES_DETAIL_ERR,
                    payload : {
                        data : []
                    }
                })
                // console.log(err);
            })
    }
}
