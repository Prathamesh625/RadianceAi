import React from 'react';
import styles from './index.module.css';

interface Patient {
  name: string;
  age: number;
  contact: string;
  email: string;
  address: string;
}

interface NewPatientFormProps {
  patient: Patient;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NewPatientForm: React.FC<NewPatientFormProps> = ({
  handleChange,
  patient,
}) => {
  const formFields = [
    { label: 'Patient Name', type: 'text', name: 'name', value: patient.name },
    {
      label: 'Age',
      type: 'number',
      name: 'age',
      value: patient.age,
      max: 100,
      min: 10,
    },
    {
      label: 'Contact No.',
      type: 'number',
      name: 'contact',
      value: patient.contact,
    },
    { label: 'Email', type: 'email', name: 'email', value: patient.email },
    { label: 'Address', type: 'text', name: 'address', value: patient.address },
  ];

  const form = formFields.map((field, index) => (
    <div key={index}>
      <p className={styles.formInputLabel}>{field.label}</p>
      <input
        className={styles.formInput}
        name={field.name}
        type={field.type}
        value={field.value}
        onChange={handleChange}
        max={field.max}
        min={field.min}
      />
    </div>
  ));

  return <div className={styles.addPatientDetail}>{form}</div>;
};
