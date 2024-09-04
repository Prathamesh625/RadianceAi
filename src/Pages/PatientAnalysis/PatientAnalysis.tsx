import React, { useContext, useEffect, useState } from 'react';
import style from './index.module.css';
import Header from '../../Component/Header/Header';
import ImageCard from './ImageCard';
import CreateReport from './CreateReport';
import { Theme } from '../../Context/ThemeContext';
import axios from 'axios';
import ImageLoader from '../../Component/ImageLoader/ImageLoader';
import { getPatientById } from '../../Api';
import { useLocation } from 'react-router';
import { patientFetchHook } from '../../service';
import AddImage from './AddImage';

const PatientAnalysis: React.FC = () => {
  const [modalImage, setModalImage] = useState('');
  const [showModal, setShowModel] = useState(false);
  const location = useLocation();
  const [update, setUpdate] = useState(0);
  const analysedPatient = patientFetchHook(location.state, update);
  const [pagination, setPagination] = useState(0);

  const imageSliderHandler = () => {
    setPagination((prev) => prev + 1);
  };

  let array = [];

  const list = analysedPatient.console.log(analysedPatient);

  return (
    <div className={style.dashboard}>
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
          {!showModal && (
            <div className={style.patientName}>{analysedPatient.name}</div>
          )}
          <AddImage
            patientId={analysedPatient.id}
            onChangeHandler={(previous) => setUpdate(previous + 1)}
          />
          {showModal ? (
            <ImageLoader setDisplay={setShowModel} img={modalImage} />
          ) : (
            <div className={style.gridView}>
              {analysedPatient.proccessed_x_rays &&
                analysedPatient.proccessed_x_rays.map((image) => {
                  return (
                    <ImageCard
                      image={image.url}
                      type={image.type}
                      setShowModel={setShowModel}
                      setModalImage={setModalImage}
                    ></ImageCard>
                  );
                })}
            </div>
          )}
        </section>
        <section className={style.RightSection}>
          <ImageCard image={analysedPatient.x_ray} type="original"></ImageCard>
          <CreateReport patientId={analysedPatient.id} />
        </section>
      </section>
    </div>
  );
};

export default PatientAnalysis;
