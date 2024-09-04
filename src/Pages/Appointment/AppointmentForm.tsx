import React, { useState } from 'react'

import style from "./index.module.css"
import { useLocation } from 'react-router'
import { createAppointment } from '../../Api'
import toast, { Toaster } from 'react-hot-toast'

export const AppointmentForm: React.FC = ({setUpdate}) => {
    
  const date = useLocation()
  const [appointmentDate, setAppointmentDate] = useState(date.state)
  const [appointment, setAppointment] = useState({
    name: '',
    contact: '',
    time:''
  })


  // handling state
  const onChangeHandler = (e) => {
    
    const { name, value } = e.target
      if (name === 'contact' && value.length > 10) return toast.error('Mobile number should be 10 digit')
     
    setAppointment({
      ...appointment,
      [name]: value
    })
  }


  // handling form submission 

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    const data = {
      doctorId: localStorage.getItem('doctorId'),
      name: appointment.name,
      contact: appointment.contact,
      date: appointmentDate,
      time:appointment.time
    } 

    const response = await createAppointment(data);
    console.log(response.data)
    if (response.data.status === 200) toast.success(response.data.message)
    if (response.data.status === 409) toast.error(response.data.message)
    
    setUpdate((prev) => prev + 1);

  }




  return (
    <form className={style.AddAppointment} onSubmit={onSubmitHandler}>
      <Toaster/>
        <p className={style.title}>Add Appointment </p>
      <input
        name='name'
        value={appointment.name}
        onChange={onChangeHandler}
        className={style.appointmentInput}
        type="text"      
        placeholder='Patient Name'
          />
      <input
        name="contact"
        value={appointment.contact}
        onChange={onChangeHandler}
        className={style.appointmentInput}
        type="text"
        placeholder='mobile number' 
        />
        <input
        
        className={style.appointmentInput}
        type='date'
        placeholder='Date'
        value={appointmentDate}
        onChange={(e)=>setAppointmentDate(e.target.value)}
          />
          <input
              name="time"
               className={style.appointmentInput}
        type='time'
        value={appointment.time}
        placeholder='time'
        onChange={onChangeHandler}
            
          />            
          <input
               className={style.appointmentInput}
              type="submit"
              value="Add Appointment"
            
          />
        <p style={{color:"green", fontWeight:"500",marginTop:"10px", fontSize:"small"}}></p>
    </form>
  )
}
