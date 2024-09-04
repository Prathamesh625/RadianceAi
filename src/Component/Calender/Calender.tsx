import React, { useContext, useState } from 'react'
import { Calendar } from 'antd';
import moment from 'moment';
import style from "./index.module.css"
import { AddOutlined } from '@mui/icons-material';
import UpcomingAppointment from '../Appointment/UpcomingAppoinments';
import { Theme } from '../../Context/ThemeContext';
import { useNavigate } from 'react-router';
import {motion} from 'framer-motion'
import { scale } from '@cloudinary/url-gen/actions/resize';




const Calender: React.FC = (props) => {

  const {update ,setUpdate} = props
    
  const [appointmentDate, setAppointmentDate] = useState('')
  const navigate = useNavigate()
   

  const disableDates = (current:any) => {
     return current && current < moment().startOf("day")
  }

  const onPanelChange = (value: string, mode:string ) => {
        console.log(value, mode);
    }

  
  const { darkMode } = useContext(Theme)

     const onSelect = (value) => {
       
        setAppointmentDate(value.format('YYYY-MM-DD'))
  }
  
  const navigateHandler = () => {
    if (appointmentDate === '') return alert("Please select a date")
        navigate("/page/appointments" , {state:appointmentDate})
  }



  return (
    <div className={style.Calender}>
      {/* Calender  */}
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        onSelect={onSelect}
        disabledDate={(current) => disableDates(current)}
      />
      {/*  add appoinment button */}
      {/* <button
        className={style.addAppointmentBtn} onClick={navigateHandler}>
        <AddOutlined className={style.addicon} />
        <p>Add Appointment</p> 
      </button> */}
      <motion.button
         className={style.addAppointmentBtn}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.9 }}
         onClick={navigateHandler}
      >
       <AddOutlined className={style.addicon}
         
        />
         Add Appointment
      
      </motion.button>
      
      {/* upcoming appointments */}
      <UpcomingAppointment update={update} setUpdate={setUpdate} />
    </div>
  )
}

export default Calender