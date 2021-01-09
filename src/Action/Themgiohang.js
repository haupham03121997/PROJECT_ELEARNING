export const ThemGioHang = (values)=>{
return(dispatch)=>{
    dispatch({
        type : "THEM_GIO_HANG_THANH_CONG", 
        values
    })
}
}
export const SanPhamYeuThichAction = (value) =>{
    return (dispatch) => {
        dispatch({
            type : "THEM_SAN_PHAM_YEU_THICH",
            value
        })
    }
}