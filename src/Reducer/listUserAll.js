import * as Type from "../Contanst/user";
const initialState = {
  userAll: [],
  laoding: false,
  err: false,
};

export const listUserAll = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_USER_All_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
        err: false,
      };
    }
    case Type.GET_USER_All_LIST_SUCCESS: {
      return {
        ...state,
        userAll: action.payload.data,
        loading: false,
        err: false,
      };
    }
    case Type.GET_USER_All_LIST_ERR: {
        return {
          ...state,
          loading: false,
          err: true,
        };
      }
    default:
      return { ...state };
  }
};
