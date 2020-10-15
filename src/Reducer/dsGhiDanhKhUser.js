import * as Type from "../Contanst/user";
const initialState = {
  dsKHDaXetDuyet: [],
  dsKHChuaXetDuyet :[],
  dsKHChoXetDuyet :[],
  loading: false,
  error: false,
};

export const dsGhiDanhKhReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.DSKH_DA_GHI_DANH_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case Type.DSKH_DA_GHI_DANH_SUCCESS: {
      return {
        ...state,
        dsKHDaXetDuyet: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case Type.DSKH_DA_GHI_DANH_ERR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    // Lấy danh sach người dùng chưa ghi danh theo tài khoản
    case Type.DSKH_CHUA_GHI_DANH_REQUEST :{
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case Type.DSKH_CHUA_GHI_DANH_SUCCESS : {
      return {
        ...state,
        dsKHChuaXetDuyet: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case Type.DSKH_CHUA_GHI_DANH_ERR : {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    // Lấy danh sách người dùng đang chờ xét duyệt
    case Type.DSKH_CHO_GHI_DANH_REQUEST :{
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case Type.DSKH_CHO_GHI_DANH_SUCCESS : {
      return {
        ...state,
        dsKHChoXetDuyet: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case Type.DSKH_CHO_GHI_DANH_ERR : {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

      
    
    default:
      return {
        ...state,
      };
  }
};
