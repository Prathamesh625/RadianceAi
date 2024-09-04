import React from 'react'
import { useState } from 'react';


export const ContactForm = (props) => {

    const { contact, handleChange } = props;

  return (
    
          
        <form >
      <label>
        Contact:
        <input type="text" name="contact" value={contact.contact} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={contact.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>

  )
}
