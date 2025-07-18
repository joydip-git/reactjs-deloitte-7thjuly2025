import axios from "axios";

const axiosInstance = axios.create({
    //url for file upload
    //baseURL: "http://localhost:8085",

    //url for abrs backend
    baseURL: "http://localhost:3000",
    headers: {
        "Content-type": "application/json",
    },
});
export default axiosInstance