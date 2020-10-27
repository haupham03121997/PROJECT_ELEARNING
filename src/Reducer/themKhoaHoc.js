import * as Type from "../Contanst/Courses";

const dshh = localStorage.getItem('giohang');

const initialState = {
    
    loading : false,
    err : false,
    danhSachKH :dshh ? JSON.parse(dshh) : [],
}

export const ThemKhoaHocReducer = (state = initialState,action) => {
    // console.log("action"  ,action);
    switch (action.type) {
        case  "THEM_GIO_HANG_THANH_CONG" : {
            const danhSachKhNew = [...state.danhSachKH , action.values];
            localStorage.setItem(
                'giohang' , JSON.stringify(danhSachKhNew)
            )
              return { 
                  ...state,
                  danhSachKH :danhSachKhNew
              };
        }
    default:
        return {
            ...state
        }
    }
}
