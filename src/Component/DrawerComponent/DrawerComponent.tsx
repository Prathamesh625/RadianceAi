import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { appointmentListHook } from '../../service';

const DrawerComponent: React.FC = (props) => {

    const { open, onClose } = props;

    const appointments = appointmentListHook()

    console.log(appointments)

    const currentDate = new Date().toLocaleDateString()

    const filter = appointments?.filter(value => {
    
    })
    
  return (
      <Drawer
        title="Notifications"
        placement="right"
        width={400}
        onClose={onClose}
        open={open}
      >
          {
             appointments && appointments.map(li => {
                  return <li>{li.name}</li>
              })
       }
      </Drawer>
  );
};

export default DrawerComponent;