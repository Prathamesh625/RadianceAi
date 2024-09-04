import React from 'react'
import { useState } from 'react'

interface InputInterface {
   
    value: string, 
    onChangeHandler:()=>void

}

const CustomInput:React.FC<InputInterface> =props=> {

    const { onChangeHandler } = props;

  return <input  type='text' value={value} onChange={onChanhgeHandler} />
}

export default CustomInput