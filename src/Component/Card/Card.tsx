import React, { useContext } from 'react'
import style from "./index.module.css"
import { Progress ,Popover} from 'antd';
import { Theme } from '../../Context/ThemeContext';



interface CardTypes {
    title?: string,
    content: string | number | undefined
    type?:string
}

const Card: React.FC<CardTypes> = props => {
    
    const { title, content, type } = props;
    const {darkMode} = useContext(Theme)


    console.log(content)

    const dashboard = <Progress
        type="dashboard"
        style={{ fontWeight: "600" }}
        status='normal'
        percent={content}
        strokeWidth={10}
        strokeColor="rgb(87, 87, 232)"
        gapPosition='bottom'
    />

    const Content = <p>{content}</p>
    


  return (
      <div className={darkMode?style.card:style.cardDark}>
          <p className={style.title}>{title}</p>
    
          <div className={style.content}>
              {type === "dashboard" && dashboard}
              </div>
          <div className={style.textContent}>
              {type !== "dashboard" && Content}
              </div>             
    </div>
  )
}

export default Card