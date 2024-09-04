import {
  AddOutlined,
  CheckCircleOutlineRounded,
  GridView,
  LightModeOutlined,
  LoginOutlined,
  PeopleOutlineOutlined,
  Settings,
  StackedLineChartOutlined,
} from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import style from './index.module.css';
import { Theme } from '../../Context/ThemeContext';
import { Modal } from 'antd';
import { motion } from 'framer-motion';
import { patientFetchHook } from '../../service';

const SideBar: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [openPremium, setOpenPremium] = useState(false);

  useEffect(() => {
    console.log(width);

    const handleresize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleresize);

    return () => {
      window.removeEventListener('resize', handleresize);
    };
  }, []);

  const patient = patientFetchHook();

  console.log(patient);

  const navigate = useNavigate();

  const sidebarlist = [
    { route_name: 'Dashboard', path: '/page/dashboard', icon: <GridView /> },
    {
      route_name: 'Appointments',
      path: '/page/appointments',
      icon: <CheckCircleOutlineRounded />,
    },
    {
      route_name: 'New Patient',
      path: '/add/new/patient',
      icon: <AddOutlined />,
    },
    {
      route_name: 'Patient Manager',
      path: '/page/patients/',
      icon: <PeopleOutlineOutlined />,
    },
    {
      route_name: 'X-Ray Analysis',
      path: '/patients/analysis',
      icon: <StackedLineChartOutlined />,
    },
    { route_name: 'Image Tools', path: '/image/editor', icon: <Settings /> },
  ];

  const [openModal, setOpenModal] = useState(false);

  const { darkMode } = useContext(Theme);

  const handleLogout = () => {
    navigate('/');
    setOpenModal(false);
    localStorage.setItem('authorised', 'false');
  };

  const navigationHandler = (path: string) => {
    if (path === '/patients/analysis') {
      // localStorage.removeItem('patient')

      navigate(path);
    } else {
      navigate(path);
    }
  };

  return (
    <div>
      <div className={style.appname}>Radiance.AI</div>

      <div className={darkMode ? style.sidebar : style.sidebarDark}>
        {sidebarlist.map((routes, index) => {
          return (
            <div
              className={style.sidebarlist}
              onClick={() => navigationHandler(routes.path, index)}
            >
              {routes.icon}{' '}
              {width > 500 && (
                <p className={style.routeName}>{routes.route_name}</p>
              )}
            </div>
          );
        })}
        <div className={style.premium}>
          <p>Check out premium </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpenPremium(true)}
          >
            Buy Premium
          </motion.button>
          {/* <button>Buy subscription</button> */}
        </div>
      </div>
      <p className={style.title}>Settings</p>
      <div className={darkMode ? style.setting : style.settingDark}>
        <div className={style.settinglist}>
          <LightModeOutlined />
          {width > 500 && <p>Themes</p>}
        </div>
        <div className={style.settinglist} onClick={() => setOpenModal(true)}>
          <LoginOutlined />
          {width > 500 && <p>Sign Out</p>}
        </div>
      </div>

      {/*  customised modal to handle confirmation */}
      <Modal
        open={openModal}
        centered
        closeIcon={false}
        footer={[
          <button
            className={style.cancelBtn}
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>,
          <button
            key="submit"
            className={style.signoutBtn}
            onClick={handleLogout}
          >
            Sign Out
          </button>,
        ]}
      >
        <p style={{ fontSize: '1.1rem' }}>Do you really want to Signout?</p>
      </Modal>

      {/* buy premium plans */}

      <Modal
        open={openPremium}
        centered
        closeIcon={false}
        footer={[
          <button
            className={style.cancelBtn}
            onClick={() => setOpenPremium(false)}
          >
            Cancel
          </button>,
          <button key="submit" className={style.signoutBtn}>
            Purchase
          </button>,
        ]}
      >
        <p
          style={{
            fontSize: '1.1rem',
            marginBottom: '20px',
            fontWeight: 'bold',
          }}
        >
          Premium Features Includes
        </p>
        <ul>
          <li>Chatgpt </li>
          <li>Integrated chatbot </li>
          <li>Openai Advanced features</li>
          <li>Video chat</li>

          <li>Visualisation Tools </li>
        </ul>
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Plans</p>
        <li>Starting with just Rs 2999 / month</li>
      </Modal>
    </div>
  );
};

export default SideBar;
