import React from 'react';
import style from './index.module.css';
import { Progress } from 'antd';

export const Patient: React.FC = () => {
  const patient = JSON.parse(localStorage.getItem('patient'));

  return (
    <div className={style.patient}>
      <p className={style.patient_name}>{patient.patient.name}</p>
      <button className={style.continue_btn}>Continue Treatment</button>
    </div>
  );
};
