import React, { useContext } from 'react'
import style from "./index.module.css"
import { useNavigate } from 'react-router'
import { Theme } from '../../Context/ThemeContext'

const CreateReport: React.FC = ({patientId}) => {
    
  const navigate = useNavigate()
  const {darkMode} = useContext(Theme)
    return (
      <div className={darkMode?style.createReport:style.createReportDark}>
        <p className={style.createReportTitle}>Generate Report</p>
        <p className={style.sub_title}>
          Create Report , include essential Prescription , Treatment & Attachments
        </p>
        <button className={style.createReportBtn} onClick={()=>navigate("/create/report", {state:patientId})}>Create Report</button>
    </div>
  )
}

export default CreateReport