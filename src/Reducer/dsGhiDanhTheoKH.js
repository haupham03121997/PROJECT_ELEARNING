import * as Type from "../Contanst/Courses";

const initialState = {
  hvChoXetDuyet: [],
  hdDaXetDuyet : [],
  hvChuaXetDuyet : [],
  loading: false,
  err: false,
};

export const dsGhiDanhTheoKH = (state = initialState, action) => {
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
    case Type.DANH_SACH_DA_XET_DUYET_THEO_MA_REQUEST : {
        return {
          ...state , loading : true , err : false
        }
    }
    case Type.DANH_SACH_DA_XET_DUYET_THEO_MA_SUCCESS : {
      return {
        ...state , loading : false , hdDaXetDuyet : action.payload.data , err : false
      }
    }
    case Type.DANH_SACH_DA_XET_DUYET_THEO_MA_ERR : {
      return {
        ...state , loading : false , err : true
      }
    }

    case Type.DANH_SACH_CHƯA_XET_DUYET_THEO_MA_REQUEST :{
      return{
        ...state , loading : true , err : false
      }

    }
    case Type.DANH_SACH_CHƯA_XET_DUYET_THEO_MA_SUCCESS :{
      return {
        ...state , loading : false , hvChuaXetDuyet : action.payload.data , err : false
      }
    }
    
    case Type.DANH_SACH_CHƯA_XET_DUYET_THEO_MA_ERR : {
      return {
        ...state , loading : false , err : true
      }
    }

    default:
      return {
        ...state,
      }
  }
};
