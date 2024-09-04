import React from 'react'
import style from "./index.module.css"

interface ITableSearchPropsType{
  filter: string,
  setFilter:()=>void
}

export const TableSearchBox: React.FC = ({setFilter ,filter ,setStatus ,status}) => {
  

  return (
      <div className={style.search_box}>
          <input className={style.find_patient}
              type="text"
        placeholder='Search for appointments...'
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <select className={style.find_patient} value={status} onChange={(e)=>setStatus(e.target.value)}>
        <option>status</option>
        <option>pending</option>
        <option>completed</option>
        
        </select>
        {/* <p className='records'>20</p> */}
    </div>
  )
}
