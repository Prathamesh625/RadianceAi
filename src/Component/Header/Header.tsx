import React, { useContext, useState } from 'react'
import style from "./index.module.css"
import { AccountCircleOutlined, FileDownload, FileDownloadOutlined, Notifications, NotificationsOutlined, PeopleOutlineOutlined, Person2Rounded, PersonOffOutlined, PersonOutlined, PersonOutlineOutlined, PersonOutlineRounded, PersonRounded, Search } from '@mui/icons-material';
import { Theme } from '../../Context/ThemeContext';
import toast, { Toaster } from 'react-hot-toast';
import ExportIcon from "../../assets/share.png"
import { motion } from "framer-motion"
import { Drawer } from 'antd';
import DrawerComponent from '../DrawerComponent/DrawerComponent';
interface HeaderTypeDefination{

    isSearchInput: boolean,
    isExportInput: boolean,
    isSwitch: boolean,
  isUserIcon: boolean
  isNotification: boolean,
  isFindDevice: boolean



}

const Header: React.FC<HeaderTypeDefination> = props => {


    
  const { isUserIcon , isNotification , isFindDevice } = props;
  
   
  const [open, setOpen] = useState(false);

    
  const showDrawer = () => {
    setOpen(true);
  };


  const onClose = () => {
    setOpen(false);
  };



 
  const notify = () => {
    
   var message = toast.loading('Searching device to connect...', { duration: 4000 })

    setTimeout(() => {
     
      return message = toast('Could not find device to connect');

    }, 4000);
    

  }




  const SearchBar = () => {
    return (
      <div style={{
        width: "100%", display: "flex",alignItems:"center",position:"relative", left:'-10px'
      }}>
        <input className={style.input}  placeholder='Search task , appointments...'/>
        <Search style={{ position:'absolute' ,left:"20px"}}/>
      </div>
    )
  }
  

  
  const ExportSelect = () => {
    return (
      <div style={{
        width: "100%", display: "flex",alignItems:"center",position:"relative", left:'-10px'
      }}>
        <select className={style.input} >
          <option style={{textAlign:'center'}}>export file</option>
        </select>
        {/* <Search style={{ position: 'absolute', left: "20px" }} /> */}
        <img src={ExportIcon}  width="20px" style={{ position: 'absolute', left: "20px" }}/>
      </div>
    )
  }
  

  


  return (
    <div className={ style.Header}>
          
      
          {/* <input className={darkMode?style.search:style.searchDark} />
          <Search className={style.searchIcon} /> */}
      <SearchBar />
      <ExportSelect/>
      {/* <input className={darkMode ? style.input : style.inputDark} />  
    <FileDownloadOutlined className={style.Icons} /> */}
   
        {isNotification && <NotificationsOutlined className={style.Icons} onClick={showDrawer} />}
        {/* <div className={style.tag}>1</div> */}
      
      {isUserIcon && <AccountCircleOutlined className={style.Icons} />}
      {isFindDevice && <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{scale:0.9}}
        className={style.findDeviceBtn}
        onClick={notify}>
        find device
      </motion.button>}
      {isFindDevice && <Toaster />}
      <DrawerComponent open={open} onClose={onClose}  />
    </div>
  )
}
 
export default Header