import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import profile from '../../assets/profile.jpg';
import { getDoctor, getPatientById } from '../../Api';
import { patientFetchHook } from '../../service';

export const DoctorProfile: React.FC = () => {
  const [doctorName, setDoctorName] = useState('');

  const get_doctor = async () => {
    const doctor = await getDoctor();

    console.log(doctor);

    setDoctorName(doctor.data.doctor.name);
  };

  useEffect(() => {
    get_doctor();
  }, []);

  return (
    <section className={styles.addPatientSection2}>
      <img
        className={styles.doctorProfilePhoto}
        src={profile}
        width="150px"
        height="150px"
        style={{ objectFit: 'cover' }}
      />
      <p className={styles.doctorName}>Dr. {doctorName}</p>
      <p className={styles.doctorProfileSubcontent}>Senior Doctor Specialist</p>
    </section>
  );
};
