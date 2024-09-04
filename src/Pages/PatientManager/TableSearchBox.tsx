import React from 'react';
import style from './index.module.css';

interface ITableSearchPropsType {
  filter: string;
  setFilter: () => void;
}

export const TableSearchBox: React.FC = ({ setFilter, filter }) => {
  return (
    <div className={style.search_box}>
      <input
        className={style.find_patient}
        type="text"
        placeholder="Search for patients..."
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      {/* <p className='records'>20</p> */}
    </div>
  );
};
