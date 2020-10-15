import * as Type from '../Contanst/user'
const initialState = {
    userList : [],
    infoUser : null,
    loading : false,
    err : false,
}
export const getUserList = (state = initialState, action ) => {
    switch (action.type) {

        case Type.GET_USER_LIST_REQUEST : {
            return { 
                ...state , loading : true
            }
        }
        case Type.GET_USER_LIST_SUCCESS : {
            return{
                ...state , userList : action.payload.data , loading : false , err : false
            }
        }
        case Type.GET_USER_LIST_ERR : {
            return{
                ...state , loading : false , err: true
            }
        }
        case Type.SEARCH_USER_REQUEST : {
            return {
                ...state , loading : true, err: false,

            }
        }
        case Type.SEARCH_USER_SUCCESS :{
            return {
                ...state , infoUser : action.payload.data , loading : false , err: false,
            }
        }
        case Type.SEARCH_USER_ERR :{
            return{
                ...state , loading : false , err : true
            }
        }
        default :  
            return{
                ...state
            } 
        
    }
}
