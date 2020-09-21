import axios from "../Utils/axiosClient";
import swal from "sweetalert";
export const xoaNguoiDung = (taiKhoan) => {
  return (dispatch) => {
    
      axios
        .delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
        .then((result) => {
          dispatch({
            type: "XOA_NGUOI_DUNG",
          });
        });
   

    // swal({
    //   title: "Bạn muốn xóa tài khoản này?",
    //   text: "Sau khi xóa tài khoản này không còn trong dữ liệu!",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // }).then((willDelete) => {
    //   if (willDelete) {
    //     swal("Xóa thành công", {
    //       icon: "success",
    //     });

    //   } else {
    //     swal("Không xóa nữa!");
    //   }
    // });
  };
};
