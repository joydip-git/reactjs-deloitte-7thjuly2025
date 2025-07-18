import axiosInstance from "../config/axiosconfig"
import { type AxiosProgressEvent } from "axios";

const uploadFile = (file: File, onUpload: (e: AxiosProgressEvent) => void) => {
    const formdata = new FormData()

    //for file upload backend
    //formdata.append('newFile', file)
    // return axiosInstance
    //     .post(
    //         '/upload-file',
    //         formdata,
    //         {
    //             headers: {
    //                 "Content-type": "multipart/form-data",
    //             },
    //             onUploadProgress: onUpload
    //         }
    //     )

    //for video file upload abrs backend server
    formdata.append('video', file)
    return axiosInstance
        .post(
            '/upload',
            formdata,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
                onUploadProgress: onUpload
            }
        )
}

export default uploadFile