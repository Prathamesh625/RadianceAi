import React from 'react'
import style from "./index.module.css"
import { Popover, Switch } from 'antd';
import { changeAppointmentStatus } from '../../Api';
import { convert24to12 } from '../../Utilities/utility';

interface ItemsTypes{

    person: string, 
    date: string,
    time: string,
  id: string
  handleStatusUpdate: (id:string) => void

}



const PopoverContent = () => <div>Double click on appointment if done</div>


const Item: React.FC<ItemsTypes> = props => {
    
  const { person, date, time ,id , handleStatusUpdate} = props;
  
  const appointmnetTime = convert24to12(time)
  
  



  return (
     
      <Popover placement="leftTop" title={person} content={<PopoverContent/>} >
       <div className={style.list} onDoubleClick={()=>handleStatusUpdate(id)}>
            <p className={style.person}>{person}</p>
            <div className={style.flex}>
              <p className={style.date}>{date}</p>
          <p className={style.date}>{appointmnetTime}</p>
            </div>
        </div>
      </Popover>
 
  )
}

export default Item