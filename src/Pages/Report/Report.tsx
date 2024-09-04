import React from 'react';
import style from './index.module.css';
import Header from '../../Component/Header/Header';
import { ReportEditor } from './ReportEditor';
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './ReactPDF';
import { ReportEditorForm } from './ReportEditorForm';
import { useState } from 'react';
import { JSPdf } from './JSPdf';
import { patientFetchHook } from '../../service';

const Report: React.FC = () => {
  // fething patient details

  const [formData, setFormData] = useState({
    patientName: '',
    problem: '',
    suggestions: '',
    treatment: '',
    preliminaryFindings: '',
  });

  const [prescription, setPrescription] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(prescription);

  const [attachments, setAttachments] = useState([]);

  const handleFile = (e) => {
    setAttachments([...attachments, URL.createObjectURL(e.target.files[0])]);
  };

  console.log(attachments);

  const [send, setSend] = useState(false);

  const createPdf = () => {
    setSend(true);
  };

  return (
    <div className={style.dashboard}>
      {/* Header component */}
      <Header
        isSearchInput={true}
        isExportInput={true}
        isSwitch={true}
        isUserIcon={true}
        isNotification={true}
        isFindDevice={false}
      />
      <section className={style.flexSection}>
        <section className={style.LeftSection}>
          <ReportEditor
            formData={formData}
            prescription={prescription}
            attachments={attachments}
          />
          <PDFViewer height="100%" width="100%">
            <MyDocument
              formData={send && formData}
              prescription={prescription}
              attachments={attachments}
            />
          </PDFViewer>
        </section>
        <section className={style.RightSection}>
          <ReportEditorForm
            formData={formData}
            handleChange={handleChange}
            setPrescription={setPrescription}
            prescription={prescription}
            handleFile={handleFile}
            createPdf={createPdf}
          />
        </section>
      </section>{' '}
    </div>
  );
};

export default Report;
