import React, { useEffect, useState } from 'react'
import style from "./index.module.css"
import Header from '../../Component/Header/Header'
import { DeleteOutline } from '@mui/icons-material'
import axios from 'axios'
import { getAppointmentList } from '../../Api'
import { convert24to12 } from '../../Utilities/utility'




const Table: React.FC = ({filter, update ,status}) => {


    const [appointment, setAppointment] = useState();

    const getAllAppointment = async() => {
      const appointment = await getAppointmentList(0);
        setAppointment(appointment.data.appointments)
    
    }
    
    useEffect(() => {
        getAllAppointment()
    },[update])
    


  return (
      <div className={style.Table}>
          <table className={style.patient_table}>
                  <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Date</th>
                      <th>Time</th>
                        <th>Status</th>
                      
                     
                      </tr>
                  </thead>
                  <tbody>
                {
                                               
                  appointment && appointment.filter(value=>value.name.toLowerCase().includes(filter.toLowerCase())).filter(value=>value.status.toLowerCase().includes(status)).map((list, index) =>

                        <tr className="table-row">
                        <td>{index+1}</td>
                        <td>{list.name}</td>
                        <td>{list.contact}</td>
                        <td>{list.date}</td>
                      <td>{convert24to12(list.time)}</td>
                          <td>{list.status}</td>
                        
                            </tr>
                    
            )
                      }   
                  </tbody>  
      </table>
       </div>   
 
  )
}

export default Table



