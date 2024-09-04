import React, { useState } from 'react'
import style from "./index.module.css"
import Header from '../../Component/Header/Header'
import PatientTable from './PatientTable'
import { Patient } from './Patient'
import { TableSearchBox } from './TableSearchBox'




const PatientManager: React.FC = () => {
    
  const [filter, setFilter] = useState('')

  
  return (
      <div className={style.dashboard}>
          
          {/* Header component */}
        <Header
            isSearchInput={true}
            isExportInput={true}
            isSwitch={true}
        isUserIcon={true}
        isNotification={true}
        isFindDevice = {false}
          />
          <section className={style.flexSection}>
        <section className={style.LeftSection}>
          <TableSearchBox filter={filter} setFilter={setFilter} />
          <PatientTable filter={filter} />
          </section>
          <section className={style.RightSection}>   
          <Patient/>
          </section>
        </section>
    </div>
  )
}

export default PatientManager