import { useEffect, useState, type ChangeEvent } from "react"
import uploadFile from "../services/fileservice"
import type { AxiosProgressEvent } from "axios"
import { toast, ToastContainer } from "react-toastify";

type ProgressInfoType = {
    percentange: number,
    filename: string
}
const FileUpload = () => {

    const [selectedFiles, setSelecedFiles] = useState<FileList>()
    const [progessInfos, setProgressInfos] = useState<ProgressInfoType[]>([])
    const [messages, setMessages] = useState<string[]>([])

    const selectFiles = (e: ChangeEvent<HTMLInputElement>) => {
        const list = e.target.files
        if (list) {
            setSelecedFiles(list)
        }
    }

    const upload = async (i: number, file: File) => {
        const _progessInfos = [...progessInfos]

        const onProgrssHandler = (e: AxiosProgressEvent): void => {
            if (e.total) {
                const per = Math.round((100 * e.loaded) / e.total)
                _progessInfos[i].percentange = per
                setProgressInfos(_progessInfos)
            }
        }

        try {
            const response = await uploadFile(file, onProgrssHandler)
            if (response.status === 200) {
                toast.success("Uploaded File Successfully: " + file.name,
                    {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: _progessInfos[i].percentange
                    }
                )
                setMessages(prev => ([...prev, "Uploaded File Successfully: " + file.name]))
            } else {
                toast.error("Could not upload file: " + file.name,
                    {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: 0
                    }
                )
                _progessInfos[i].percentange = 0
                setProgressInfos(_progessInfos)
                setMessages(prev => ([...prev, "Could not upload file: " + file.name]))
            }
        } catch (error: any) {
            toast.error("Could not upload file: " + file.name,
                {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0
                }
            )
            _progessInfos[i].percentange = 0
            setProgressInfos(_progessInfos)
            setMessages(prev => ([...prev, "Could not upload file: " + file.name]))
        }
    }
    const uploadFiles = () => {
        if (selectedFiles && selectedFiles.length > 0) {
            for (let index = 0; index < selectedFiles.length; index++) {
                const file = selectedFiles[index];
                upload(index, file)
            }
        }
    }

    useEffect(
        () => {
            const _porgressInfos: ProgressInfoType[] = []
            if (selectedFiles && selectedFiles.length > 0) {
                for (let index = 0; index < selectedFiles.length; index++) {
                    const file = selectedFiles[index];
                    _porgressInfos.push({ filename: file.name, percentange: 0 })


                }
                setProgressInfos(_porgressInfos)
                setMessages([])
            }
        }, [selectedFiles]
    )
    return (
        <>
            <ToastContainer />
            <div>
                {
                    progessInfos.length > 0 && progessInfos.map(
                        (progressInfo, index) => {
                            return (
                                <div className="mb-2" key={index}>
                                    <span>{progressInfo.filename}</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-info"
                                            role="progressbar"
                                            aria-valuenow={progressInfo.percentange}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: progressInfo.percentange + "%" }}
                                        >
                                            {progressInfo.percentange}%
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }

                <div className="row my-3">
                    <div className="col-8">
                        <label className="btn btn-default p-0">
                            <input type="file" multiple onChange={selectFiles} />
                        </label>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-success btn-sm" disabled={!selectFiles} onClick={uploadFiles}>
                            Upload
                        </button>
                    </div>
                </div>

                {
                    messages.length > 0 && (
                        <div className="alert alert-secondary" role="alert">
                            <ul>
                                {
                                    messages.map(
                                        (m, index) => {
                                            return <li key={index}>{m}</li>
                                        }
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default FileUpload