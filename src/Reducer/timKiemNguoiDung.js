import * as Type from "./../Contanst/user";
const initialState = {
  timKiemNguoiDung: [],
  loading: false,
  err: false,
};

export const TimKiemNguoiDungReDucer = (state = initialState, action) => {
  switch (action.type) {
    case Type.SEARCH_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        err: false,
      };
    }
    case Type.SEARCH_USER_SUCCESS: {
      return {
        ...state,
        timKiemNguoiDung: action.payload.data,
        loading: false,
        err: false,
      };
    }

    case Type.SEARCH_USER_ERR: {
      return {
        ...state,
        loading: false,
        err: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
