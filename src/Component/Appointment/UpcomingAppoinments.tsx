import React, { useEffect, useState } from 'react';
import style from './index.module.css';
import Item from './Item';
import { changeAppointmentStatus, getAppointmentsByStatus } from '../../Api';

interface Appointment {
  id: string;
  name: string;
  date: string;
  time: string;
}

const UpcomingAppointment: React.FC = () => {
  const [pendingAppointments, setPendingAppointments] = useState<Appointment[]>(
    []
  );
  const [update, setUpdate] = useState(0); // Track updates to refetch appointments

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const appointments = await getAppointmentsByStatus('pending', 3);
        setPendingAppointments(appointments.data.appointments);
      } catch (error) {
        console.error('Error fetching appointments', error);
      }
    };

    getAppointments();
  }, [update]); // Dependency array includes `update` to refetch on status change

  const handleStatusUpdate = async (itemId: string) => {
    try {
      await changeAppointmentStatus(itemId);
      setUpdate((prev) => prev + 1); // Trigger a re-fetch by updating state
    } catch (error) {
      console.error('Error updating appointment status', error);
    }
  };

  const list = pendingAppointments.map((appointment) => (
    <Item
      key={appointment.id}
      person={appointment.name}
      date={appointment.date}
      time={appointment.time}
      id={appointment.id}
      handleStatusUpdate={handleStatusUpdate}
    />
  ));

  return (
    <div className={style.UpcomingAppointment}>
      <p className={style.title}>Upcoming Appointments</p>
      <div className={style.list}>{list}</div>
    </div>
  );
};

export default UpcomingAppointment;
