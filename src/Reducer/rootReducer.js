import {combineReducers} from 'redux';
import { getCategoriesCourses} from './danhMucKhoaHoc.js'
import { getCoursesList} from './danhSachKhoaHoc';
import {UserReducer} from './UserReducer';
import {getUserList} from './listUser';
import {ghiDanhKHReducer} from "./ghiDanhKHReducer"
export const rootReducer = combineReducers({
    getCoursesList,
    getCategoriesCourses,
    UserReducer,
    getUserList,
    ghiDanhKHReducer
   
})