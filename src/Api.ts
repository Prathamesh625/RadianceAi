import axios from "axios";
import { patientFetchHook } from "./service";

const RadianceAiBackendUrl = 'http://localhost:8000/api/v1'





export const getDoctor = async () => {


    const id = localStorage.getItem('doctorId')

    console.log(id)
     
    try {
        const response = await axios.get(`${RadianceAiBackendUrl}/get/a/doctor?doctorId=${id}`);
        console.log(response.data)
        return response;
        
    } catch (e) {
        return { error:'error' , message:e}
    }
   
    
}





// authentication or sign in api call to check whether account exist or not 


export const signIn = async( email:string, password:string) => {
    
    console.log(email ,password)
    try {
        
        const response = await axios.get(`${RadianceAiBackendUrl}/find/doctor?email=${email}&password=${password}`);

        console.log(response)

    return response
    
    } catch (error) {
        
        console.log(error)


    }

}





// api call to create a doctor 



export const createDoctor = async (data) => {
    console.log(data)

    try {
        const response = await axios.post(`${RadianceAiBackendUrl}/create/doctor`,data);
        return response;
        
    } catch (e) {
        return { error:'error occured while creating appointment'}
    }
   
    
}


// api call to update current patient

export const currentPatient = async (patientId:string) => {
    // console.log(data)

     const id = localStorage.getItem('doctorId')

    try {

        const response = await axios.put(`${RadianceAiBackendUrl}/update/current/patient?doctorId=${id}&patientId=${patientId}`);
        
        return response;
        
    } catch (e) {

        return { error: 'could not update current patient' }
        
    }
   
    
}



// api call to create an appointment 



export const createAppointment = async (data) => {
    console.log(data)

    

    try {
        const response = await axios.post(`${RadianceAiBackendUrl}/create/appointment`, data);
        return response;
        
    } catch (e) {
        return { error: 'error occured while creating appointment' }
    }
   
    
}



// api call to create appointment


export const createPatient = async (data , onUploadProgress) => {
    console.log(data)

    try {
        const response = await axios.post(`${RadianceAiBackendUrl}/create/new/patient`, data, { onUploadProgress: onUploadProgress });
        
        return response;
        
    } catch (e) {
        return { error:'error occured while adding patient'}
    }
   
    
}




// api call to create or add new patient


export const getPatientList = async (limit:number) => {
  

    try {
        const response = await axios.get(`${RadianceAiBackendUrl}/get/all/patients?limit=${limit}&doctorId=${localStorage.getItem('doctorId')}`);
        
        return response;
        
    } catch (e) {
        return { error:'error occured while creating appointment'}
    }
   
    
}






// get  a patient with id


export const getPatientById = async (patientId: string) => {
    

    console.log(patientId)

    

    try {
        
        const response = await axios.get(`${RadianceAiBackendUrl}/get/patient?patientId=${patientId}`)

        return response;

    } catch (error) {
         

        console.log(error)

    }
    





}






// get appointment list


export const getAppointmentList = async (limit) => {
  

    try {
        const response = await axios.get(`${RadianceAiBackendUrl}/get/all/appointments?limit=${limit}&doctorId=${localStorage.getItem('doctorId')}`);
        
        return response;
        
    } catch (e) {
        return { error:'error occured while creating appointment'}
    }
   
    
}



//  remove appointment


export const removeAppointment = async () => {
    


    try {
    
        const response = await axios.delete(`${RadianceAiBackendUrl}/remove/appointment`)

        return response;

    
} catch (error) {
      
        console.log(error)
        
        
}


}




// change appointment status


export const changeAppointmentStatus = async (appointmentId) => {
    
    try {
        
        const response = await axios.put(`${RadianceAiBackendUrl}/update/appointment?appointmentId=${appointmentId}`)

        return response 


    } catch (error) {


        console.log(error)

        
    }

}




// get comploeted appointments


export const getAppointmentsByStatus = async (status , limit) => {
    
    try {
        
        const response = await axios.get(`${RadianceAiBackendUrl}/get/completed/appointments?doctorId=${localStorage.getItem('doctorId')}&status=${status}&limit=${limit}`)

        return response

    } catch (error) {

        console.log(error)

    }

}



export const processExtraImages = async (url:string , title:string, patientId:string) => {
    


    try {
        
          const response = await axios.put(`${RadianceAiBackendUrl}/process/extra/images`,
        {
            patientId:patientId,
            url: url,
            title: title,
        }
        )
        
        return response;


    } catch (error) {
      
        console.log(error)
      
    }

  



}