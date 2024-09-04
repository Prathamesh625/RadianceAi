import React, { useContext, useEffect, useRef, useState } from 'react'
import style from "./index.module.css"
import { Auth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import {motion} from "framer-motion"


export const Login = () => {




    const {login, authorised } = useContext(Auth)
     
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    // handling login credentials to authentic users
    
    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setEmail(event.target.value)

    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setPassword(event.target.value)

    }



    const error = () => toast.error('Invalid Credentials',{position:'top-right'})
    const success = () => toast.success('Login successfull',{position:'top-right'})

    // handling form submit event

    const onSubmitHandler = async(event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()


        const user = await login(email, password)

        if (user.data.status === 200) success()
        
        if (user.data.status === 400) return toast.error(user.data.message,{position:'top-right'})

        if(JSON.parse(localStorage.getItem('authorised')) === true) navigate('/page/dashboard')
      
    }




  

    return (
  
           
      <div className={style.container}>
          
          <Toaster />
       
         <h2>Sign In To Your Account</h2>
          <p className={style.subheading}>All fields are necessary and should be correct</p>
          <form className={style.form} onSubmit={onSubmitHandler}>
           <label className={style.formLabel}>
            Email
              <input
                  className={style.formInput}
                  type="email"
                  name="email"
                  value={email}
                  onChange={emailHandler}
              />
         </label>
     
    
     <label className={style.formLabel}>
              Password
              <input
                  className={style.formInput}
                  type="password"
                  name="password"
                  value={password}
                  onChange={passwordHandler}
              />
              </label>
                {/* <button className={style.formSubmit} type="submit">Sign In</button> */}
                <motion.button className={style.formSubmit} type='submit'>Sign In</motion.button>

          </form>
    <p className={style.link}>Don't have an account <Link style={{color:"blue", textDecoration: "none"}} to="/page/register">Create Account</Link></p>            
</div>
  
        
    
  )
}
