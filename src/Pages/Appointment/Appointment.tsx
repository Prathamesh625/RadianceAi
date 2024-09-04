import React, { useState } from 'react';
import style from './index.module.css';
import Header from '../../Component/Header/Header';
import Table from './Table';
import { TableSearchBox } from './TableSearchBox';
import { AppointmentForm } from './AppointmentForm';
import { useScrollTrigger } from '@mui/material';

const Appointment: React.FC = () => {
  const [filter, setFilter] = useState('');

  const [update, setUpdate] = useState(0);

  const [status, setStatus] = useState('pending');

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
          <TableSearchBox
            setFilter={setFilter}
            filter={filter}
            setStatus={setStatus}
            status={status}
          />

          <Table filter={filter} update={update} status={status} />

          <div className={style.cardFlex}></div>
        </section>
        <section className={style.RightSection}>
          <AppointmentForm setUpdate={setUpdate} />
        </section>
      </section>
    </div>
  );
};

export default Appointment;
