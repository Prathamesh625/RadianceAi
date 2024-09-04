import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./index.module.css"
import image from "../../assets/relaxation.png"
import { Account } from './Account'
import { ProfileForm } from './Profile'
import { ContactForm } from './ContactForm'
import { AddressForm } from './AddressForm'
import { createDoctor } from '../../Api'
import toast, { Toaster } from 'react-hot-toast'


interface User{

    firstName: string,
    lastName:string,
    email: string,
    contact:number
    password: string,
    confirm:string
    
}


interface Profile {
    proffession: string,
    image: string,
    position: string,
    hospital:string
}

interface Contact{
    contact: string,
    email: string,

}

interface Address{
     
    address: string,
    state: string,
    city: string,
    picode:number

}

const SignUpPage:React.FC = () => {
    
    const [user, setUser] = useState<User>({})

    const [profile, setProfile] = useState<Profile>({})

    const [contact ,setContact] = useState({})
    
    const [formNo, setFormNo] = useState<number>(1)
    
    const navigate = useNavigate()

    

 
   


    // account form  handler

     const handleAccountForm = (e) => {
       const { name, value } = e.target;
       if(name==="contact" && value.length>10) return toast.error('please enter valid contact number')
         setUser({ ...user, [name]: value });
         
    };


    console.log(user)
    

    const accountSubmitHandler = async (e) => {
        e.preventDefault();
        const fullname = user.firstName +" "+ user.lastName
        const data = {
            name: fullname,
            email: user.email,
            mobile: user.contact,
            password:user.password
      }
      
      if(user.contact.length >10 || user.contact.length<10) return toast.error('please enter valid contact number') 
        const doctor = await createDoctor(data)
        console.log(doctor)
      if (doctor.status === 200) alert(doctor.data.detail)
        if (doctor.status === 409) alert(doctor.data.detail)
      
      // setTransition(true)

      navigate("/")
      
        setFormNo(previous => previous + 1)

        

    }

    
      const handleProfileForm = (e) => {
    const { name, value } = e.target;
          setProfile({ ...profile, [name]: value });
        //  if (Object.keys(profile).length===4) setFormNo(3)

        
          
  };

    
      const handleContactForm = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

 
    
    const [transition ,setTransition] = useState(false)


  return (
    <div className={style.flex}>
      <Toaster/>
        <div className={style.left}>
            <img src={image} alt="" width="100%" style={{marginTop:"20%"}}/>
        </div>
        <div className={style.right}>
              
        {formNo === 1 &&  <Account
                user={user}
                handleChange={handleAccountForm}
                  onSubmit={accountSubmitHandler}
                  transition={transition}
            /> 
        }
        {formNo === 2 && <ProfileForm
                profile={profile}
                handleChange={handleProfileForm}
                user={user}
            />
        }
             {/* <ContactForm contact={contact} handleChange={handleContactForm} /> */}
              {/* <AddressForm /> */}
          </div>
    </div>
  )
}

export default SignUpPage