import axios from "axios";
import { redirect } from "react-router";
import { getAppointmentList, getAppointmentList, getAppointmentList, getDoctor, getPatientById } from "./Api";
import { redRock } from "@cloudinary/url-gen/qualifiers/artisticFilter";
import { useEffect, useState } from "react";

export  const uploadToServer = async (e) => {

    if (!file) return alert("Please select a file")
    let formdata = new FormData();
    formdata.append('file', file);
    formdata.append("upload_preset", "RadianceAI")
    formdata.append("cloud_name", "dzfzl11lo")
    const url = "https://api.cloudinary.com/v1_1/dzfzl11lo/image/upload";
    const uploadImage = await axios.post(url,formdata,{onUploadProgress:onUploadProgress})
    console.log(uploadImage.data)
    setX_ray(uploadImage.data.url)
  
}
  



export const loader = async () => {
  
  const reponse = await axios.get('http://localhost:8000/api/v1/get/all/patient?limit=0')
  if (reponse.data) {
    return redirect("/page/")
  } 
}





export const loadDashboard = async() => {
  
  const response = await getDoctor();

  return response

}



interface PatientHook{
  id?:string
}



export const patientFetchHook = (id?:string , update?:str) => {

  const [patient, setPatient] = useState({});
 
  const doctor = async () => { 

    const response = await getDoctor();

    if (id) {

       const patient = await getPatientById(id)
   
      setPatient(patient.data.patient)
      
    } else {
      
         const patient = await getPatientById(response.data.doctor.current_patient)
   
    setPatient(patient.data.patient)

    }

 
  }


  useEffect(() => {
    
    doctor()

  },[id , update])
  

  
  return patient
}




export const appointmentListHook = () => {
  
  const [appointments, setAppointments] = useState();

  const getAppointmentRequest = async() => {
    

    const getAppointments = await getAppointmentList(0);
    
    setAppointments(getAppointments.data.appointments)


  }



  useEffect(() => {
    
    getAppointmentRequest();

  },[])

  return appointments;
}