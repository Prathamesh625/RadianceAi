import React, { useEffect, useState } from 'react'
import style from "./index.module.css"
import Header from '../../Component/Header/Header'
import { DeleteOutline } from '@mui/icons-material'
import { getPatientList } from '../../Api'
import { useNavigate } from 'react-router'





const PatientTable: React.FC = ({filter}) => {


    const [list, setList] = useState();

    const getAllAppointment = async() => {
        const patients = await getPatientList(0)
        setList(patients.data)
        console.log(patients.data)
    }
    
    useEffect(() => {
        getAllAppointment()
    },[])
    



    const navigate = useNavigate()

  return (
      <div className={style.PatientTable}>
          <table className={style.patient_table}>
                  <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>email</th>
                        <th>age</th>
                         {/* <th></th> */}
                      </tr>
                  </thead>
                  <tbody>
                {
                                               
                 list && list.filter(value=>value.name.toLowerCase().includes(filter.toLowerCase())).map((list, index) =>

                        <tr className="table-row" onClick={()=>navigate("/patients/analysis" ,{state:list.id})}>
                        <td>{index+1}</td>
                        <td>{list.name}</td>
                        <td>{list.contact}</td>
                        <td>{list.email}</td>
                        <td>{list.age}</td>
                        {/* <td><DeleteOutline/></td> */}
                            </tr>
                    
            )
                      }   
                  </tbody>  
          </table>
         
       </div>   
 
  )
}

export default PatientTable