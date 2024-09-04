import React from 'react';
import style from './index.module.css';
import { useState } from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@mui/icons-material';

export const ReportEditorForm = (props) => {
  const {
    formData,
    handleChange,
    setPrescription,
    prescription,
    handleFile,
    createPdf,
  } = props;

  const [pre, setPre] = useState('');

  const handler = (e) => {
    setPre(e.target.value);
  };

  return (
    <div className={style.editDocument}>
      <p className={style.title}>Edit Report</p>
      <div className={style.form}>
        <p className={style.formLabel}>Patient Name</p>
        <input
          className={style.input}
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
        />
        <p className={style.formLabel}>Problem</p>
        <input
          className={style.input}
          type="text"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
        />
        <p className={style.formLabel}>Prescription</p>
        <input
          className={style.input}
          type="text"
          value={pre}
          onChange={handler}
        />
        <button onClick={() => setPrescription([...prescription, pre])}>
          add
        </button>
        <p className={style.formLabel}>Suggestions</p>
        <textarea
          className={style.textarea}
          name="suggestions"
          value={formData.suggestions}
          onChange={handleChange}
        ></textarea>
        <p className={style.formLabel}>Treatment</p>
        <textarea
          className={style.textarea}
          name="treatment"
          value={formData.treatment}
          onChange={handleChange}
        ></textarea>
        <p className={style.formLabel}>Preliminary Findings</p>
        <textarea
          className={style.textarea}
          name="preliminaryFindings"
          value={formData.preliminaryFindings}
          onChange={handleChange}
        ></textarea>
        {/* <input type="file" name="" id="" onChange={handleFile} /> */}
        <button className={style.saveBtn} onClick={createPdf} type="submit">
          Save
        </button>
      </div>
    </div>
  );
};
