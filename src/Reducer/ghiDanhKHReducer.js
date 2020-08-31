import * as Type from '../Contanst/Courses'
const initialState = {
    ghiDanh : {},
    loading : false,
    err: false
}

export const ghiDanhKHReducer =  (state = initialState, action) => {
    switch (action.type) {
        case Type.GHI_DANH_KHOA_HOC_REQUEST : {
            return {
                ...state , loading : true, err : false
            }
        }
        case Type.GHI_DANH_KHOA_HOC_SUCCESS : {
            return {
                ...state , ghiDanh : action.payload.data , loading : false, err : false
            }
        }
        case Type.GHI_DANH_KHOA_HOC_ERR : {
            return {
                ...state , loading : false , err: true
            }
        }
    default:
        return state
    }
}
