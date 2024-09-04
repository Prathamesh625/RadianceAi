
import React, { useState,useEffect } from 'react'
import "./style.css"
import { Button, Slider, Upload } from 'antd'

import axios from "axios"
import { InboxOutlined, UploadOutlined } from "@ant-design/icons"
import Dragger from "antd/es/upload/Dragger"

function ImageAnalyserTool() {
  const [Contrast, setContrast] = useState(100)
  const [Brightness, setBrightness] = useState(100)
  const [Blur, setBlur] = useState(0)
  const [invert, setInvert] = useState(0)
  const [Saturation, setSaturation] = useState(1)
  const [sepia,setsepia] = useState(0)
  // const [Image, setImage] = useState("")
  
  


  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [cursorPosition,setCursorPosition] = useState({x:0,y:0})


  const handleMouseChange = (e) => {
    const { top, left, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x: x, y: y });
    setCursorPosition({x:e.pageX-left,y:e.pageY-top})
  }





  const [patient_name, setPatientName] = useState('');
  const [patient, setPatient] = useState()
  const [imageType , setImageType] = useState('')
  const [Image, setImage] = useState('')
  console.log(imageType)
  
  const SearchAPatient = async() => {
    const patient = await axios.get(`http://localhost:8000/api/v1/patient/query?name=${patient_name}`)
    console.log(patient.data)
    setImage(patient.data.patient.x_ray)

  }


  const uploadImage = (e) => setImage(URL.createObjectURL(e.fileList[0].originFileObj))



  console.log(Image)


  const [count, setCount] = useState(0)
  


  const flip = () => {
    if (count === 360) setCount(0);
    setCount(prev => count + 90);
  }


console.log(Contrast+" "+Brightness+" "+invert )

const filterFun =  `brightness(${Brightness}%) contrast(${Contrast}%) blur(${Blur}px) invert(${invert}%) sepia(${sepia}%) saturate(${Saturation}%)`
  const style = {
    backgroundImage: `url(${Image})`,
    width: "100%",
    height: "78vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center",
    backgroundSize: 'contain',
    transform:`rotate(${count}deg)`,
    filter:  filterFun 
    
  }



  return (
    <div className='image-editor' id="image-editor" >
      <div className='image-editor-navbar'>
        <p className="editor-nav-name">Image Editor</p>
        <input className='image-editor-search' placeholder="Search for patients X-Ray" onChange={(e) => setPatientName(e.target.value)} value={ patient_name} />
       
        <select className="image-editor-select" name="" id=""  onChange={(e)=>setImageType(e.target.value)} value={imageType}>
          <option>Original Image</option>
          <option>Segmented Image</option>
          <option>Enhanced Image</option>
          <option>Enhanced Image</option>
        </select>
        <button className="image-editor-search-btn" onClick={SearchAPatient}>Search</button>
      <Upload  >
    <Button style={{marginLeft:"10px"}} icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  
      </div>
      <section className='image-editor-flex-box'>
        {Image ?
          <div className='image-editor-comp'>
            {showMagnifier && <div style={{
              position: "absolute",
              left: `${cursorPosition.x + 100}px`,
              top: `${cursorPosition.y - 50}px`,
              zIndex: "100",
              filter: filterFun,
              pointerEvents: "none"
            }} ><div
              className='lens'
              style={{
                backgroundImage: `url(${Image})`,
                height: "150px",
                width: "150px",
       
                backgroundPosition: `${position.x}% ${position.y}%`
              }}></div>
            </div>}
         
            <div
              style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }}
            >
              <div
                style={style}
                onMouseMove={handleMouseChange}
                onMouseEnter={() => setShowMagnifier(true)}
                onMouseLeave={() => setShowMagnifier(false)}
              ></div>
            </div>
             
          </div>
          :
          <div className="image-editor-comp">
            <Dragger  onChange={uploadImage}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag X-Ray Image to this area to upload</p>
            </Dragger>
          </div>
        }
        <div className='image-filter-comp'>
          
          <div style={{marginBottom:"20px"}}>Image Filters</div>
          <InputBox
            filter="Brightness"
            min={100}
            max={500}
            state={Brightness}
            setState={setBrightness}
          />
          <InputBox
            filter="Contrast"
            min={100}
            max={500}
            state={Contrast}
            setState={setContrast}
          />
          {/* <InputBox
            filter="Grayscale"
            min={1}
            max={500}
            state={Grayscale}
            setState={setGrayscale}
          /> */}
          {/* <InputBox 
            filter="Blur"
            min={0}
            max={25}
            state={Blur}
            setState={setBlur}
          /> */}
          <InputBox 
            filter="Invert"
            min={0}
            max={200}
            state={invert}
            setState={setInvert}
          />
          {/* <InputBox 
            filter="saturation"
            min={0}
            max={500}
            state={Saturation}
            setState={setSaturation}
          />
          <InputBox 
            filter="sepia"
            min={0}
            max={500}
            state={sepia}
            setState={setsepia}
          /> */}

          <button className='flip' onClick={flip}>Rotate Image</button>
          
        </div>
       
      </section>
    </div>
  )
}



const InputBox = ({ filter, state, min, max, setState }) => {
  
  const onRangeHandler = (input) => {
    setState(input)
  }
  return (<div className='Input-box-editor'>
    <p className='filter-name'>{filter}</p>
   
     <Slider
      min={min}
      max={max}
      value={typeof state === 'number' ? state : 0}
      onChange={onRangeHandler}
    />
    
  </div>)
}



export default ImageAnalyserTool