import React from 'react';
import { Drawer } from 'antd';
import type { DrawerProps } from 'antd';
import { appointmentListHook } from '../../service';

interface DrawerComponentProps extends DrawerProps {
  open: boolean;
  onClose: () => void;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, onClose }) => {
  const appointments = appointmentListHook();

  const currentDate = new Date().toLocaleDateString();

  // Example filtering logic, adjust the condition based on your needs
  const filteredAppointments = appointments?.filter(
    (appointment: { date: string }) => {
      // Add your filter logic here if needed
      return appointment.date === currentDate;
    }
  );

  return (
    <Drawer
      title="Notifications"
      placement="right"
      width={400}
      onClose={onClose}
      open={open}
    >
      <ul>
        {filteredAppointments && filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment: any) => (
            <li key={appointment.id}>{appointment.name}</li>
          ))
        ) : (
          <p>No appointments found for today.</p>
        )}
      </ul>
    </Drawer>
  );
};

export default DrawerComponent;
