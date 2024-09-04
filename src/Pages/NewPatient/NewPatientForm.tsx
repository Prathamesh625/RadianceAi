import styles from './index.module.css';

export const NewPatientForm = (props) => {
  const { handleChange, patient } = props;

  const data = [
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

  const form = data.map((element) => {
    return (
      <div>
        <p className={styles.formInputLabel}>{element.label}</p>
        <input
          className={styles.formInput}
          name={element.name}
          type={element.type}
          value={element.value}
          onChange={handleChange}
          max={element.max}
        />
      </div>
    );
  });

  return <div className={styles.addPatientDetail}>{form}</div>;
};
