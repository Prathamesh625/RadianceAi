import { ChangeEvent, useContext, useState } from 'react';
import Header from '../../Component/Header/Header';
import { DoctorProfile } from './DoctorProfile';
import style from './index.module.css';
import { NewPatientForm } from './NewPatientForm';
import { NewPatientUploadImage } from './NewPatientUploadImage';
import axios from 'axios';
import { createPatient, currentPatient } from '../../Api';
import { useNavigate } from 'react-router';
import { Auth } from '../../Context/AuthContext';
import { Flex, Modal, Progress } from 'antd';
import toast, { Toaster } from 'react-hot-toast';

interface IpatientType {
  doctorId: string;
  name: string;
  email: string;
  age: string;
  contact: string;
  address: string;
  x_ray: string;
}

export const NewPatient = () => {
  const navigate = useNavigate();

  // usestate for patient

  const [open, setOpen] = useState(false);

  const [file, setFile] = useState('');

  const [loading, setLoading] = useState(false);

  const [showProgress, setShowProgress] = useState(false);

  const [progress, setProgress] = useState(0);

  const [x_ray_image, set_X_ray_image] = useState('');

  const [patient, setPatient] = useState<IpatientType>({
    doctorId: localStorage.getItem('doctorId') as string,
    name: '',
    email: '',
    age: '',
    contact: '',
    address: '',
    x_ray: '',
  });

  const { doctorId } = useContext(Auth);

  console.log(localStorage.getItem('doctorId'));

  const onImageUpload = (e) => setFile(e.fileList[0].originFileObj);

  // change event handler
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'age' && value.length > 2)
      return alert('Age should be less than 100');
    if (name === 'contact' && value.length > 10)
      return alert('Contact should be of 10 digits');

    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const reUpload = () => {
    set_X_ray_image('');
  };

  const onUploadProgress = (event) => {
    const percentage = Math.round((100 * event.loaded) / event.total);
    console.log(percentage);
    setTimeout(() => {
      setProgress(percentage);
    }, 1000);
  };

  const [requestCompletion, setRequestCompletion] = useState(0);

  const onRedirectingProgress = (event) => {
    setOpen(true);

    const percentage = Math.round((100 * event.loaded) / event.total);
    console.log(percentage);
    setTimeout(() => {
      setRequestCompletion(percentage);
    }, 1000);
  };

  const uploadToServer = async (e) => {
    if (!file) return alert('Please select a file');
    setLoading(true);
    setShowProgress(true);
    let formdata = new FormData();
    formdata.append('file', file);
    formdata.append('upload_preset', 'RadianceAI');
    formdata.append('cloud_name', 'dzfzl11lo');
    const url = 'https://api.cloudinary.com/v1_1/dzfzl11lo/image/upload';
    const uploadImage = await axios.post(url, formdata, {
      onUploadProgress: onUploadProgress,
    });
    set_X_ray_image(uploadImage.data.url);
    setPatient({ ...patient, x_ray: uploadImage.data.url });
    console.log(uploadImage.data.url);
    setShowProgress(false);
    setLoading(false);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (
      patient.name === '' ||
      patient.age === '' ||
      patient.contact === '' ||
      patient.address === ''
    )
      return alert('All fields are compulsory');

    if (Object.keys(patient).length !== 7)
      return alert('All fields are compulsory');

    if (!x_ray_image) return toast.error('Please upload the x-ray image');

    const response = await createPatient(patient, onRedirectingProgress);

    console.log(response.data);

    if (response.status === 200) {
      await currentPatient(response.data.id);

      requestCompletion < 150 && setOpen(false);

      return navigate('/patients/analysis', { state: response.data.id });
    }
  };

  return (
    <div className={style.dashboard}>
      {/* Header component */}

      <Header
        isSearchInput={true}
        isExportInput={true}
        isSwitch={true}
        isUserIcon={false}
        isNotification={false}
        isFindDevice={true}
      />
      <section className={style.flexSection}>
        <section className={style.LeftSection}>
          <div className={style.flex}>
            <NewPatientForm
              handleChange={onChangeHandler}
              patient={patient}
              onSubmit={onSubmitHandler}
            />

            <NewPatientUploadImage
              upload={onImageUpload}
              uploadToServer={uploadToServer}
              showProgress={showProgress}
              progress={progress}
              x_ray={x_ray_image}
              reupload={reUpload}
              loading={loading}
            />
          </div>
          <div className={style.note}>
            <textarea
              style={{
                resize: 'none',
                width: '100%',
                height: '70%',
                outline: 'none',
              }}
              placeholder="Add some note here if want to...."
            />
          </div>
          <div className={style.proceed}>
            <button className={style.proceedBtn} onClick={onSubmitHandler}>
              Proceed
            </button>
          </div>
        </section>
        <section className={style.RightSection}>
          <DoctorProfile />
        </section>

        {/* modal to show progress */}
        <Modal
          title="processing....."
          centered
          open={open}
          closeIcon={false}
          footer={false}
        >
          <Flex gap={20}>
            <Progress
              percent={requestCompletion}
              showInfo={false}
              status="normal"
              strokeColor="rgba(87, 87, 237, 0.667);"
            />
            <p>{requestCompletion}</p>
          </Flex>
        </Modal>
        <Toaster />
      </section>
    </div>
  );
};
