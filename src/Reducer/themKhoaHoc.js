import * as Type from "../Contanst/Courses"
const initialState = {
    Status : 0,
    loading : false,
    err : false,
    messerr : "",
    giohang : []
}

export const ThemKhoaHocReducer = (state = initialState,action) => {
    console.log("action"  ,action);
    switch (action.type) {
        case  "THEM_GIO_HANG_THANH_CONG" : {
           const giohang = [...state.giohang , action.values ];
           localStorage.setItem('giohang' ,JSON.stringify(giohang))
           return { 
            ...state, giohang
         }
        }
    default:
        return {
            ...state
        }
    }
}
