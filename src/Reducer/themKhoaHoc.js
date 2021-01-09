
const giohang = localStorage.getItem("giohang");
const userLogin = localStorage.getItem("userLogin");
const dangKyKh = localStorage.getItem("themKhoaHoc");
const initialState = {
  loading: false,
  err: false,
  danhSachKH: giohang ? JSON.parse(giohang) : [],
  khDaDangKy: dangKyKh ? JSON.parse(dangKyKh) : [],
};
export const ThemKhoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG_THANH_CONG": {
      const danhSachKhNew = [...state.danhSachKH, action.values];
      if (userLogin) {
        localStorage.setItem("giohang", JSON.stringify(danhSachKhNew));
      }

      return {
        ...state,
        danhSachKH: danhSachKhNew,
      };
    }
    case "XOA_KHOA_HOC_LOCAL_SUCCESS": {
      const danhSachKhNew = [...state.danhSachKH];
    
      const index = danhSachKhNew.findIndex((item) => {
        return (item.maKhoaHoc === action.id);
      });
        danhSachKhNew.splice(index, 1);
        console.log("action" ,action.id);
      console.log("index" , index);
      console.log("danhSachKhNew" , danhSachKhNew);
      localStorage.setItem('giohang', JSON.stringify(danhSachKhNew));
      return { ...state, danhSachKH: danhSachKhNew };
    }
    default:
      return {
        ...state,
      };
  }
};
export const NGuoiDungDangKyKhoaHoc = (state = initialState, action) => {
  switch (action.type) {
    case "NGUOI_DUNG_DANG_KY_KHOA_HOC": {
      const KhoaHocGhiDanhNew = [...state.khDaDangKy, action.values];
      localStorage.setItem("themKhoaHoc", JSON.stringify(KhoaHocGhiDanhNew));
      return {
        ...state,
        khDaDangKy: KhoaHocGhiDanhNew,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
export const HuyKhDaDangKy = (state = initialState, action) => {
  switch (action.type) {
    case "HUY_KHOA_HOC_DA_DANG_kY": {
      const khDaDangKyNew = [...state.khDaDangKy];
      const index = khDaDangKyNew.findIndex((kh) => {
        return (kh.maKhoaHoc = action.values.maKhoaHoc);
      });
      khDaDangKyNew.splice(index, 1);
      localStorage.setItem("themKhoaHoc", JSON.stringify(khDaDangKyNew));
      return {
        ...state,
        khDaDangKy: khDaDangKyNew,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const ThemSanPhamYeuThich = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SAN_PHAM_YEU_THICH": {
    };
    break;
    default:
      return {
        ...state,
      };
  }
};
