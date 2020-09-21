import * as Type from "../Contanst/Courses";

const initialState = {
  hvChoXetDuyet: [],
  loading: false,
  err: false,
};

export const hvChoXetDuyetTheoMaKH = (state = initialState, action) => {
  switch (action.type) {
    case Type.DANH_SACH_CHO_XET_DUYET_THEO_MA_REQUEST: {
      return {
        ...state,
        loading: true,
        err: false,
      };
    }
    case Type.DANH_SACH_CHO_XET_DUYET_THEO_MA_SUCCESS: {
      return {
        ...state,
        hvChoXetDuyet: action.payload.data,
        loading: false,
        err: false,
      };
    }
    case Type.DANH_SACH_CHO_XET_DUYET_THEO_MA_ERR: {
      return {
        ...state,
        loading: false,
        err: true,
      };
    }

    default:
      return {
        ...state,
      }
  }
};
