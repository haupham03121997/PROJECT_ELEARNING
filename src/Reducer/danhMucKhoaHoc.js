import * as Type from "../Contanst/Courses"

const initialState = {
    categoriesCourses: [],
    categoriesDetail: [],
    loading: false,
    error: false,
    // mgsErr : 'Empty Courses'
}

export const  getCategoriesCourses = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_CATEGORY_COURSES_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case Type.GET_CATEGORY_COURSES_SUCCESS: {
            return {
                ...state,
                categoriesCourses: action.payload.data,
                loading: false,
                error: false
            }
        }
        case Type.GET_CATEGORY_COURSES_ERR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case Type.GET_CATEGORY_COURSES_DETAIL_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case Type.GET_CATEGORY_COURSES_DETAIL_SUCCESS: {
            return {
                ...state,
                categoriesDetail: action.payload.data,
                loading: false,
                error: false
            }
        }
        case Type.GET_CATEGORY_COURSES_DETAIL_ERR: {
            return {
                ...state,
                loading: false,
                error: false,
                categoriesDetail: [],// khi khóa học trống sẽ trả về mãng rỗng
            }
        }
        default:
            return {
                ...state
            }
    }
}


