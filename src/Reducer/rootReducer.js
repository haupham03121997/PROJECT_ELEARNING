import {combineReducers} from 'redux';
import { getCategoriesCourses} from './danhMucKhoaHoc.js'
import { getCoursesList} from './danhSachKhoaHoc';
import {UserReducer} from './UserReducer';
import {getUserList} from './listUser';
import {ghiDanhKHReducer} from "./ghiDanhKHReducer";
import {listUserAll} from "./listUserAll";
import {hvChoXetDuyetTheoMaKH} from "./hvChoXetDuyetTheoMaKH"
export const rootReducer = combineReducers({
    getCoursesList,
    getCategoriesCourses,
    UserReducer,
    getUserList,
    ghiDanhKHReducer,
    listUserAll,
    hvChoXetDuyetTheoMaKH
   
})