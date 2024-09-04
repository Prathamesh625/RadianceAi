import SideBar from '../../Component/SideBar/SideBar';
import style from './index.module.css';
import { NewPatient } from './NewPatient';

export const NewPatientPage = () => {
  return (
    <div className={style.Flex}>
      <SideBar />
      <NewPatient />
    </div>
  );
};
