import React from 'react'
import { useState } from 'react';
import style from "./index.module.css"
import { Flex } from 'antd';
import { Link } from 'react-router-dom';


export const Account = (props) => {

    const { user, handleChange , onSubmit , transition} = props;




    
    return (
        <div className={style.container} style={{transform:`${transition} && translate(-50%)` , transition:"200ms "}}>
            
            <h2>Register Your Account</h2>
            
            <p className={style.subheading}>All fields are necessary and should be correct</p>
            <form  className={style.form} onSubmit={onSubmit}>
                <div className={style.flexBox}>
       <label className={style.formLabel}>
        First Name
                        <input
                            className={style.formInput}
                            type="text"
                            name="firstName"
                            value={ user.firstName}
                            onChange={handleChange}
                        />
        </label>
    <label className={style.formLabel}>
        Last Name
                        <input
                            className={style.formInput}
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                        />
      </label>


                </div>
     
      <label className={style.formLabel}>
        Email
                    <input
                        className={style.formInput}
                        type="email"
                        name="email"
                        value={ user.email}
                        onChange={handleChange}
                    />
      </label>
      <label className={style.formLabel}>
        Contact
                    <input
                        className={style.formInput}
                        type="text"
                        name="contact"
                        value={ user.contact}
                        onChange={handleChange}
                    />
                </label>
                
                <div className={style.flexBox}>
                     <label className={style.formLabel}>
        Password
                        <input
                            className={style.formInput}
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                </label>
                 <label className={style.formLabel}>
        Confirm
                        <input
                            className={style.formInput}
                            type="password"
                            name="confirmpassword"
                            value={user.confirm}
                            onChange={handleChange}
                        />
      </label>
                </div>
           
                <button type="submit" className={style.formSubmit}>Sign Up</button>
    <p className={style.link}>Already have an account <Link style={{color:"blue", textDecoration: "none"}} to="/">Sign In</Link></p>
                
            </form>
            </div>
  )
}
