import { useContext, useEffect } from 'react';
import SideBar from '../../Component/SideBar/SideBar';
import style from './index.module.css';
import PatientAnalysis from './PatientAnalysis';
import { Theme } from '../../Context/ThemeContext';
import { Auth } from '../../Context/AuthContext';
import { Navigate, useNavigate } from 'react-router';

const PatientAnalysisPage = () => {
  const { authorised } = useContext(Auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('authorised') === 'false') navigate('/');
  }, [authorised]);

  return (
    <div className={style.Flex}>
      <SideBar />
      <PatientAnalysis />
    </div>
  );
};

export default PatientAnalysisPage;
