import React from 'react'
import SideBar from '../../Component/SideBar/SideBar'
import style from "./index.module.css"
import Report from './Report'

export const ReportPage:React.FC = () => {
  return (
   <div className={style.Flex}>
      <SideBar />
      <Report/>
    </div>
  )
}
