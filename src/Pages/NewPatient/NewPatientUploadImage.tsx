import { Progress, Upload } from "antd"
import styles from "./index.module.css"
import { Player } from "@lottiefiles/react-lottie-player";
import fluid from "../../assets/fluid.json"
import drop from "../../assets/dropFilling.json"
import tank from "../../assets/tank.json"
import infinity from "../../assets/infinity.json"
import loader from "../../assets/loop.gif"
import { useEffect, useRef, useState } from "react";


export const NewPatientUploadImage: React.FC = (props) => {
    
  const { upload, uploadToServer, progress, showProgress , x_ray ,reupload , loading} = props;
  
  const UploadComponent = () => {
    
    return (
      <div>
       <Upload  type='drag' style={{ height: "300px" }} onChange={upload}  >
              Drag and Drop or click her to upload
        </Upload> 
 <button className={styles.uploadBtn} onClick={uploadToServer}>Upload</button>
      </div>
    )
  }


  const ImageComponent = () => {
    return <div>
      {x_ray &&
      <div className={styles.imageContainer}>
         <img className={styles.uploadeImage} src={x_ray} alt="" />
        </div> 
      }
          {x_ray && <button className={styles.uploadBtn} onClick={reupload}>Upload Again</button>}

      </div>
  }
    
  
  // lottie animations

  const FluidFillingAnimation = ()=> <Player className={styles.fluid} src={infinity} autoplay />

  return (
    <div className={styles.xRayUploadComp}>
      <p className={styles.xRayUploadCompTitle}>Upload X-RAY</p>
      {/* {!x_ray ? <UploadComponent /> : <ImageComponent/>} */}
       {loading && <img src={loader } width="100%" style={{zIndex:"200", position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)"}} />}
      {!x_ray && <UploadComponent />}
      {x_ray && <ImageComponent/>}
    </div>
  )
}
