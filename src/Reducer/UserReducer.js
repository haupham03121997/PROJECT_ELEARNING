import * as Type from '../Contanst/Courses';
import * as TypeUser from '../Contanst/user';
const userLogin = localStorage.getItem("userLogin");
const userLoginFacebook = localStorage.getItem("userLoginFacebook");

const innitialValue = {
    credential: userLogin ? JSON.parse(userLogin)  : null,
    loading: false,
    err: false,
    userInfomation : [],
    credentialFacebook : userLoginFacebook ? JSON.parse(userLoginFacebook) : null,
}
export const UserReducer = (state = innitialValue, action) => {
    switch (action.type) {
        case Type.SIGNIN_REQUEST: {
            return {
                ...state, loading: true, err: false
            }
        }
        case Type.SIGNIN_SUCCESS: {
            return {
                ...state, credential: action.payload.data, loading: false, err: false
            }
        }
        case Type.SIGNIN_ERR: {
            return {
                ...state, loading: false,  err: true
            }
        }

        case Type.LOGOUT : {
            return {
                ...state ,credential : null , loading : false, error : false ,
                
            }
        }

        case Type.GET_USER_INFOR_REQUEST : {
            return {
                ...state, loading : true , err: false
            }
        }

        case Type.GET_USER_INFOR_SUCCESS : {
            return {
                ...state,userInfomation : action.payload.data , loading : false , err: false
            }
        }
        case Type.GET_USER_INFOR_ERR :{
            return {
                ...state, loading: false,  err: true
            }
        }
        case TypeUser.CHANGE_PASSWORD_REQUEST :{
            return {
                ...state , loading : true , err : false
            }
        }
        case TypeUser.CHANGE_PASSWORD_SUCCESS :{
            return {
                ...state, credential: action.payload.data, loading: false, err: false
            }
        }
        case TypeUser.CHANGE_PASSWORD_ERR : {
            return{
                ...state, loading: false,  err: true
            }
        }
        case "LOGIN_FACEBOOK_SUCCESS" : {
            return {
                ...state , credentialFacebook : action.values , loading : false , err : false
            }
        }
        case "LOGOUT_FACEBOOK_SUCCESS" : {
            return {
                ...state , credentialFacebook : null , loading : false , err : false
            }
        }
        default:
            return {
                ...state
            }
    }
}

