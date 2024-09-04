import style from "./index.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Item from "./Item"
import { changeAppointmentStatus, getAppointmentList, getAppointmentsByStatus } from "../../Api"



const UpcomingAppointment: React.FC = (props) => {

    const { update, setUpdate } = props;

    const [appointment, setAppointment] = useState()

    const [pendingAppointment, setPendingAppointment] = useState()

    const [order ,setOrder] = useState([0,1,2])
    
    
    
    useEffect(() => {
        const getAppointments = async () => {

            const appointments = await getAppointmentsByStatus('pending' ,3)
            console.log("data", appointments.data.appointments)
            setPendingAppointment(appointments.data.appointments)
        
        }
        
        getAppointments()
        
        
    }, [update])
    


     const handleStatusUpdate = async (itemId) => {
             
        const status = await changeAppointmentStatus(itemId)

        setUpdate(update+1)
    
  }





    const list = pendingAppointment && pendingAppointment.map(appoinments => {
        return <Item
            person={appoinments.name}
            date={appoinments.date}
            time={appoinments.time}
            id={appoinments.id}
            handleStatusUpdate={handleStatusUpdate}

        />
    })
    
return (
    <div className={style.UpcomingAppointment}>
        <p className={style.title}>Upcoming Appoinments</p>
        
        <div className={style.list}>{list}</div>
    </div>
  )
}

export default UpcomingAppointment