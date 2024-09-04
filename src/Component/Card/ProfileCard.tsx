import React from 'react'
import style from "./index.module.css"
import profile from "../../assets/profile.jpg"
import { Progress } from 'antd'

interface ProfileCardTypes {
    title?: string,
    content: string,
    progress:number
}

const ProfileCard: React.FC<ProfileCardTypes> = props => {
    
  const { title, content, progress } = props;
  
  console.log(progress)


  return (
    <div className={style.ProfileCard}>
      <div>
          <p className={style.ProfileCardTitle}>Welcome , {title}</p>
          <p className={style.ProfileCardContent}>{content}</p>
      </div>
     <Progress  
                        type="line"
                        style={{marginTop: "30px"}}
                        strokeWidth={10}
                         status='normal'
                        percent={progress}
                          strokeColor="rgba(67, 67, 232, 0.667)"
                        />
      </div>
  )
}

export default ProfileCard