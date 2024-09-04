import axios from 'axios';

const RadianceAiBackendUrl = 'http://localhost:8000/api/v1';

export const getDoctor = async () => {
  const id = localStorage.getItem('doctorId');
  console.log(id);

  try {
    const response = await axios.get(
      `${RadianceAiBackendUrl}/get/a/doctor?doctorId=${id}`
    );
    console.log(response.data);
    return response;
  } catch (e) {
    console.error('Error fetching doctor:', e);
    return { error: 'Error occurred while fetching doctor', message: e };
  }
};

export const signIn = async (email: string, password: string) => {
  console.log(email, password);
  try {
    const response = await axios.get(
      `${RadianceAiBackendUrl}/find/doctor?email=${email}&password=${password}`
    );
    console.log(response);
    return response;
  } catch (e) {
    console.error('Error during sign-in:', e);
    return { error: 'Error occurred during sign-in', message: e };
  }
};

export const createDoctor = async (data: any) => {
  console.log(data);
  try {
    const response = await axios.post(
      `${RadianceAiBackendUrl}/create/doctor`,
      data
    );
    return response;
  } catch (e) {
    console.error('Error creating doctor:', e);
    return { error: 'Error occurred while creating doctor', message: e };
  }
};

export const currentPatient = async (patientId: string) => {
  const id = localStorage.getItem('doctorId');
  try {
    const response = await axios.put(
      `${RadianceAiBackendUrl}/update/current/patient?doctorId=${id}&patientId=${patientId}`
    );
    return response;
  } catch (e) {
    console.error('Error updating current patient:', e);
    return { error: 'Could not update current patient', message: e };
  }
};

export const createAppointment = async (data: any) => {
  console.log(data);
  try {
    const response = await axios.post(
      `${RadianceAiBackendUrl}/create/appointment`,
      data
    );
    return response;
  } catch (e) {
    console.error('Error creating appointment:', e);
    return { error: 'Error occurred while creating appointment', message: e };
  }
};

export const createPatient = async (
  data: any,
  onUploadProgress?: (progressEvent: any) => void
) => {
  console.log(data);
  try {
    const response = await axios.post(
      `${RadianceAiBackendUrl}/create/new/patient`,
      data,
      { onUploadProgress }
    );
    return response;
  } catch (e) {
    console.error('Error adding patient:', e);
    return { error: 'Error occurred while adding patient', message: e };
  }
};

export const getPatientList = async (limit: number) => {
  try {
    const response = await axios.get(
      `${RadianceAiBackendUrl}/get/all/patients?limit=${limit}&doctorId=${localStorage.getItem('doctorId')}`
    );
    return response;
  } catch (e) {
    console.error('Error fetching patient list:', e);
    return { error: 'Error occurred while fetching patient list', message: e };
  }
};

export const getPatientById = async (patientId: string) => {
  console.log(patientId);
  try {
    const response = await axios.get(
      `${RadianceAiBackendUrl}/get/patient?patientId=${patientId}`
    );
    return response;
  } catch (e) {
    console.error('Error fetching patient by ID:', e);
    return { error: 'Error occurred while fetching patient', message: e };
  }
};

export const getAppointmentList = async (limit: number) => {
  try {
    const response = await axios.get(
      `${RadianceAiBackendUrl}/get/all/appointments?limit=${limit}&doctorId=${localStorage.getItem('doctorId')}`
    );
    return response;
  } catch (e) {
    console.error('Error fetching appointment list:', e);
    return {
      error: 'Error occurred while fetching appointment list',
      message: e,
    };
  }
};

export const removeAppointment = async (appointmentId: string) => {
  try {
    const response = await axios.delete(
      `${RadianceAiBackendUrl}/remove/appointment?appointmentId=${appointmentId}`
    );
    return response;
  } catch (e) {
    console.error('Error removing appointment:', e);
    return { error: 'Error occurred while removing appointment', message: e };
  }
};

export const changeAppointmentStatus = async (appointmentId: string) => {
  try {
    const response = await axios.put(
      `${RadianceAiBackendUrl}/update/appointment?appointmentId=${appointmentId}`
    );
    return response;
  } catch (e) {
    console.error('Error changing appointment status:', e);
    return {
      error: 'Error occurred while changing appointment status',
      message: e,
    };
  }
};

export const getAppointmentsByStatus = async (
  status: string,
  limit: number
) => {
  try {
    const response = await axios.get(
      `${RadianceAiBackendUrl}/get/completed/appointments?doctorId=${localStorage.getItem('doctorId')}&status=${status}&limit=${limit}`
    );
    return response;
  } catch (e) {
    console.error('Error fetching appointments by status:', e);
    return {
      error: 'Error occurred while fetching appointments by status',
      message: e,
    };
  }
};

export const processExtraImages = async (
  url: string,
  title: string,
  patientId: string
) => {
  try {
    const response = await axios.put(
      `${RadianceAiBackendUrl}/process/extra/images`,
      {
        patientId,
        url,
        title,
      }
    );
    return response;
  } catch (e) {
    console.error('Error processing extra images:', e);
    return {
      error: 'Error occurred while processing extra images',
      message: e,
    };
  }
};
