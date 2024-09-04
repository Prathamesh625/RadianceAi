import React, { useEffect, useState } from 'react'
import style from "./index.module.css"
import Header from '../../Component/Header/Header'
import Card from '../../Component/Card/Card'
import ProfileCard from '../../Component/Card/ProfileCard'
import Graph from '../../Component/Graph/Graph'
import Calender from '../../Component/Calender/Calender'
import { getAppointmentList, getDoctor, getPatientById,} from '../../Api'



interface IAppointmentsType {
    
     doctorId:string,
    name:string,
    contact:string,
    date:string,
    time:string,
    status:string
}


const Dashboard: React.FC = () => {

    const [update, setUpdate] = useState(0);

    const [doctor, setDoctor] = useState({})
    
    const [patient, setPatient] = useState()

    const [appointments, setAppointments] = useState<Array<IAppointmentsType>>();

    const [completedAppointments, setCompletedAppointments] = useState(0);

  
    // making api call to fetch doctor
    const get_doctor = async () => {
        
        const doctor = await getDoctor();
        
        setDoctor(doctor.data.doctor);

        const get_patient = await getPatientById(doctor.data.doctor.current_patient) 

        setPatient(get_patient.data.patient)


    }
    
    





    // api call to fetch dashboard details


    const getTotalAppointments = async () => { 

        const total_appointments = await getAppointmentList(0);
        
        setAppointments(total_appointments.data.appointments)

    }




    useEffect(() => {

        get_doctor()

        getTotalAppointments()
    
    },[])



    useEffect(() => {


        const completed: number | any = appointments && appointments.filter(value => value.status === 'completed')
        
    
        setCompletedAppointments(Math.ceil((completed?.length / appointments?.length)*100))

    }, [appointments] )



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
                 
                  <ProfileCard
                      title={`Dr. ${doctor?.name}`}
                      content='You have lot of task to complete yet'
                      progress={30}
                  />
                <div className={style.cardFlex}>
                    <Card title='Current Patient' content={patient?patient.name:'Empty'} />
                    <Card title='Total Appointments' content={appointments?.length} />
                      <Card title='Appointments Completed' content={completedAppointments} type="dashboard" />  
                </div>
                    <Graph />
            </section>
            <section className={style.RightSection}>
                  <Calender update={update} setUpdate={setUpdate} />
              </section>
          
        </section>
    </div>
  )
}





export default Dashboard