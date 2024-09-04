import SideBar from '../../Component/SideBar/SideBar'
import style from "./index.module.css"
import PatientManager from './PatientManager'
import { useContext } from 'react'
import { Auth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'


const PatientManagerPage = () => {
    
  const { authorised } = useContext(Auth)
  const navigate = useNavigate()
  
 
  useEffect(() => {
    if(localStorage.getItem('authorised') === 'false') navigate('/')
  },[authorised])

  return (

    <div className={style.Flex}>
        <SideBar />
       <PatientManager/>
    </div>
  )
}

export default PatientManagerPage