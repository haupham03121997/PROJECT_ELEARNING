import * as Type from "../Contanst/Courses"
const initialState = {
    Status : 0,
    loading : false,
    err : false,
    messerr : ""
}

export const ThemKhoaHocReducer = (state = initialState,action) => {
    switch (action.type) {

    // case Type.THEM_KHOA_HOC_REQUEST:{
    //     return{
    //         ...state , loading : true , err :false
    //     }
    // }
    // case Type.THEM_KHOA_HOC_SUCCESS:{
    //     return {
    //         ...state , Status : action.payload.data , loading : false , err :false
    //     }
    // }
    // case Type.THEM_KHOA_HOC_FAIL:{
    //     return{
    //         ...state , loading :  false, err :true
    //     }
    // }

    default:
        return {
            ...state
        }
    }
}
