import { useScrollTrigger } from '@mui/material';
import React, { JSXElementConstructor, useState } from 'react';
import { createContext } from 'react';
import { useActionData, useNavigate } from 'react-router';
import { signIn } from '../Api';

export const Auth = createContext(null);

const AuthContext = ({ children }) => {
  const [authorised, setAuthorised] = useState(false);
  const [doctorId, setDoctorId] = useState('');
  const login = async (email: string, password: string) => {
    const user = await signIn(email, password);

    if (user?.data.status === 200) {
      setAuthorised(true);
      setDoctorId(user.data.doctor.doctorId);
      localStorage.setItem('authorised', 'true');
      localStorage.setItem('doctorId', user.data.doctor.doctorId);
      console.log(user.data.doctorId);
    } else {
      setAuthorised(false);
    }
    return user;
  };

  return (
    <Auth.Provider value={{ login, authorised, doctorId }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
