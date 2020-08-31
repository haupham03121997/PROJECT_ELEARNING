import * as Type from '../Contanst/user'
const initialState = {
    userList : [],
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
        default :  
            return{
                ...state
            } 
        
    }

   
}
