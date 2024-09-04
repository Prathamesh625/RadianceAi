import React from 'react';
import style from './index.module.css';
import { Popover } from 'antd';
import { convert24to12 } from '../../Utilities/utility';

interface ItemProps {
  person: string;
  date: string;
  time: string;
  id: string;
  handleStatusUpdate: (id: string) => void;
}

const PopoverContent: React.FC = () => (
  <div>Double click on appointment if done</div>
);

const Item: React.FC<ItemProps> = ({
  person,
  date,
  time,
  id,
  handleStatusUpdate,
}) => {
  const appointmentTime = convert24to12(time);

  const handleDoubleClick = () => {
    try {
      handleStatusUpdate(id);
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  return (
    <Popover placement="leftTop" title={person} content={<PopoverContent />}>
      <div className={style.list} onDoubleClick={handleDoubleClick}>
        <p className={style.person}>{person}</p>
        <div className={style.flex}>
          <p className={style.date}>{date}</p>
          <p className={style.date}>{appointmentTime}</p>
        </div>
      </div>
    </Popover>
  );
};

export default Item;
