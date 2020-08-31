// import * as Type from '../Contanst/Courses'
// const innitialState = {
//     userSignup : [],
//     loading : false,
//     error : false
// }

// export const SIGNUP  = (state = innitialState , action) => {
//     switch (action.type) {
//         case Type.SIGNUP_REQUEST : {
//              return {
//                  ...state , loading : true , error : false
//              }
//         }
//         case Type.SIGNUP_SUCCESS :{
//             return {
//                 ...state , userSignup : action.payload.data , loading : false , error : false 
//             }
//         }
//         case Type.SIGNUP_ERR : {
//             return {
//                 ...state , loading : false , error : false
//             }
//         }
//         default:
//             return {
//                 ...state
//             }
//     }
// }