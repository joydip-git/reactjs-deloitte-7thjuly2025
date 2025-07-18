import axiosInstance from "../config/axiosconfig"
import { type AxiosProgressEvent } from "axios";

const uploadFile = (file: File, onUpload: (e: AxiosProgressEvent) => void) => {
    const formdata = new FormData()
    formdata.append('newFile', file)
    axiosInstance
        .post(
            '/upload-file',
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