import {combineReducers} from 'redux';
import { getCategoriesCourses} from './danhMucKhoaHoc.js'
import { getCoursesList} from './danhSachKhoaHoc';
import {UserReducer} from './UserReducer';
import {getUserList} from './listUser';
import {ghiDanhKHReducer} from "./ghiDanhKHReducer";
import {listUserAll} from "./listUserAll";
import {dsGhiDanhTheoKH} from "./dsGhiDanhTheoKH";
import {dsGhiDanhKhReducer} from "./dsGhiDanhKhUser";
import {TimKiemNguoiDungReDucer} from "./timKiemNguoiDung";
import {ThemKhoaHocReducer ,NGuoiDungDangKyKhoaHoc  ,ThemSanPhamYeuThich} from "./themKhoaHoc"
export const rootReducer = combineReducers({
    getCoursesList,
    getCategoriesCourses,
    UserReducer,
    getUserList,
    ghiDanhKHReducer,
    listUserAll,
    dsGhiDanhTheoKH,
    dsGhiDanhKhReducer,
    TimKiemNguoiDungReDucer,
    ThemKhoaHocReducer,
    NGuoiDungDangKyKhoaHoc,
    ThemSanPhamYeuThich
    
})