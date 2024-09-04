import SideBar from '../../Component/SideBar/SideBar';
import style from './index.module.css';
import Appointment from './Appointment';
import { Auth } from '../../Context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useContext } from 'react';

const AppointmentPage = () => {
  const { authorised } = useContext(Auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('authorised') === 'false') navigate('/');
  }, [authorised]);

  return (
    <div className={style.Flex}>
      <SideBar />
      <Appointment />
    </div>
  );
};

export default AppointmentPage;
