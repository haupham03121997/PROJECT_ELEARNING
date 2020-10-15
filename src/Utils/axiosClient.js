import Axios from 'axios';

const axiosClient = Axios.create({
    baseURL: "https://elearning0706.cybersoft.edu.vn/api/",
});
axiosClient.interceptors.request.use((config) => {
    const userInfo =
        localStorage.getItem("userLogin")
        && JSON.parse(localStorage.getItem("userLogin"))

    if (userInfo) {
        config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
        // console.log(userInfo);
    }
    return config;

})
export default axiosClient;
// export const setToken = (token) => {
//     axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`
// }


