import SideBar from '../../Component/SideBar/SideBar';
import style from './index.module.css';
import Dashboard from './Dashboard';
import { useContext, useEffect, useState } from 'react';
import { Auth } from '../../Context/AuthContext';
import { Navigate, useLoaderData, useNavigate } from 'react-router';
import animation from '../../assets/Logo_animation.gif';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { authorised } = useContext(Auth);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('authorised') === 'false') navigate('/');
  }, [authorised]);

  const loader = useLoaderData();

  if (loader.isLoading) return <div>Loading...</div>;

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 3000);
    () => clearTimeout(id);
  }, []);

  return (
    <div>
      {loading ? (
        <img
          src={animation}
          width="200px"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
      ) : (
        <div className={style.Flex}>
          <SideBar />
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
