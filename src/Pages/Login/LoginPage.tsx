import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.css';
import image from '../../assets/relaxation.png';
import { Login } from './Login';
// import loader from "../../assets/logo animation.gif"
import animation from '../../assets/Logo_animation.gif';

// import RadianceAi from "../../assets/RadianceAiLogo.svg"
import RadianceAi from '../../assets/Final.svg';

const LoginPage: React.FC = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoad(false);
    }, 5000);

    return () => clearTimeout(id);
  }, []);

  return (
    <div style={{}}>
      <div className={style.flex}>
        <div className={style.left}>
          {/* <img src={RadianceAi} alt="" width="150px" style={{position:"absolute" , top:"20px" , left:"50px"}} /> */}

          {/* <img src={image} alt="" width="100%" style={{marginTop:"20%" }}/> */}
          <img src={RadianceAi} alt="" className={style.logo} />
          <h3 className={style.logoName}>
            Radiance.
            <span style={{ color: 'black', fontFamily: 'Font' }}>Ai</span>
          </h3>
        </div>
        <div className={style.right}>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
