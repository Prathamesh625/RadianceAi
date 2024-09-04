import React, { useState } from 'react'
import {motion} from "framer-motion"
import { Upload } from 'antd'
import style from "./index.module.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { processExtraImages } from '../../Api'

const AddImage = ({patientId}) => {

    const [url, setUrl] = useState()
    const [image, setImage] = useState();
    const [showProceed , setShowProceed] = useState(false)

    
     const onImageUpload =(e) => setImage(e.fileList[0].originFileObj)

  

    const sendRequestToBackend = async () => {
        
        if(!image) return toast.error('add x-ray image')

        let formdata = new FormData();
        formdata.append('file', image);
        formdata.append("upload_preset", "RadianceAI")
        formdata.append("cloud_name", "dzfzl11lo")
        const url = "https://api.cloudinary.com/v1_1/dzfzl11lo/image/upload";
        const uploadImage = await axios.post(url, formdata)
        setUrl(uploadImage.data.url)
        const response = await processExtraImages(uploadImage.data.url, 'image', patientId) 
        console.log(response.data)
        
    }


    return (
        <div className={style.addImageCard}>
            <p className={style.addImageContent}>Process another x_ray Image...</p>
            {
                !image ?
                    <Upload showUploadList={false} onChange={onImageUpload}> 
                        <motion.button className={style.addImageBtn}>
                            Add Image
                        </motion.button>
                    </Upload> :
                    <motion.button
                    
                        className={style.addImageBtn}
                        onClick={sendRequestToBackend}>
                        Process Image
                    </motion.button>
            }
  
    </div>
  )
}

export default AddImage