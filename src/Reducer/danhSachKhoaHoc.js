import * as Typecontants from "../Contanst/Courses"

const initialState = {
    coursesList: [],
    coursesListPagination: [],
    coursesDetail: {},
    searchCourses: [],
    loading: false,
    error: false,
}

export const getCoursesList = (state = initialState, action) => {

    switch (action.type) {
        case Typecontants.GET_COURSES_LIST_REQUEST: {
            return {
                ...state, loading: true, error: false
            }
        }
        case Typecontants.GET_COURSES_LIST_SUCCESS: {
            return {
                ...state, coursesList: action.payload.data, loading: false, error: false
            }
        }
        case Typecontants.GET_COURSES_LIST_ERR: {
            return {
                ...state, loading: false, error: false
            }

        }
        case Typecontants.GET_COURSES_LIST_PAGIN_REQUEST : {
            return {
                ...state, loading: true, error: false
            }
        }
        case Typecontants.GET_COURSES_LIST_PAGIN_SUCCESS : {
            return {
                ...state, coursesListPagination : action.payload.data , loading: false, error: false
            }
        }
        case Typecontants.GET_COURSES_LIST_PAGIN_ERR : {
            return {
                ...state, loading: false, error: true
            }
        }

        case 'OFF_LOADING':
            return {
                ...state, loading: false
            }


        case Typecontants.SEARCH_COURSES_REQUEST: {
            return {
                ...state, loading: true, error: false
            }
        }
        case Typecontants.SEARCH_COURSES_SUCCESS: {
            return {
                ...state,
                searchCourses: action.payload.data,
                loading: false,
                error: false
            }
        }
        case Typecontants.SEARCH_COURSES_ERR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        case Typecontants.GET_COURSES_DETAIL_REQUEST: {
            return {
                ...state, loading: true, error: false
            }
        }
        case Typecontants.GET_COURSES_DETAIL_SUCCESS: {
            return {
                ...state,
                coursesDetail: action.payload.data,
                loading: false,
                error: false
            }
        }
        case Typecontants.GET_COURSES_DETAIL_ERR: {
            return {
                ...state, loading: false, error: true
            }
        }

        default:
            return {
                ...state
            }
    }
}

