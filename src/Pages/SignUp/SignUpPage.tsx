import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './index.module.css';
import image from '../../assets/relaxation.png';
import { Account } from './Account';
import { ProfileForm } from './Profile';
import { createDoctor } from '../../Api';
import toast, { Toaster } from 'react-hot-toast';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  contact: string; // Changed to string to manage input as a text field
  password: string;
  confirm: string;
}

interface Profile {
  profession: string;
  image: string;
  position: string;
  hospital: string;
}

const SignUpPage: React.FC = () => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    confirm: '',
  });

  const [profile, setProfile] = useState<Profile>({
    profession: '',
    image: '',
    position: '',
    hospital: '',
  });

  const [formNo, setFormNo] = useState<number>(1);
  const navigate = useNavigate();

  // Account form handler
  const handleAccountForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'contact' && value.length > 10) {
      return toast.error('Please enter a valid contact number');
    }
    setUser({ ...user, [name]: value });
  };

  // Account form submission handler
  const accountSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user.contact.length !== 10) {
      return toast.error('Please enter a valid 10-digit contact number');
    }

    const fullName = `${user.firstName} ${user.lastName}`;
    const data = {
      name: fullName,
      email: user.email,
      mobile: user.contact,
      password: user.password,
    };

    try {
      const doctor = await createDoctor(data);
      if (doctor.status === 200) {
        toast.success(doctor.data.detail);
        setFormNo((previous) => previous + 1);
      } else if (doctor.status === 409) {
        toast.error(doctor.data.detail);
      }
    } catch (error) {
      toast.error('An error occurred while creating the doctor');
    }

    // Redirect to the home page
    navigate('/');
  };

  // Profile form handler
  const handleProfileForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className={style.flex}>
      <Toaster />
      <div className={style.left}>
        <img
          src={image}
          alt="Relaxation"
          width="100%"
          style={{ marginTop: '20%' }}
        />
      </div>
      <div className={style.right}>
        {formNo === 1 && (
          <Account
            user={user}
            handleChange={handleAccountForm}
            onSubmit={accountSubmitHandler}
          />
        )}
        {formNo === 2 && (
          <ProfileForm
            profile={profile}
            handleChange={handleProfileForm}
            user={user}
          />
        )}
        {/* Additional forms like ContactForm or AddressForm can be added here */}
      </div>
    </div>
  );
};

export default SignUpPage;
