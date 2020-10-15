import * as Type from '../Contanst/Courses';
const initialState = {
    dsKHMaUserGHiDanh : [],
    loanding : false,
    error : false,
}

export const DsUserDaGhiDanh =  (state = initialState, action) => {
    switch (action.type) {
        // case Type.GHI_DANH_KHOA_HOC_REQUEST :{
        //     return { ...state , loading : true , error : false}
        // }
        // case Type.GHI_DANH_KHOA_HOC_SUCCESS : {
        //     return {
        //        ...state ,  dsKHMaUserGHiDanh : action.payload.data , loading : false , error : false
        //     }
        // }
        // case Type.GHI_DANH_KHOA_HOC_ERR : {
        //     return { ...state , loading : false , error : false}
        // }

    default:
        return {
            ...state 
        }
    }
}
