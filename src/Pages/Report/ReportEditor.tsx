import React from 'react'
import style from "./index.module.css"

import { patientFetchHook } from '../../service';
import { useLocation } from 'react-router';



export const ReportEditor: React.FC = (props) => {

  const { formData, prescription, attachments } = props;

  const location = useLocation();

  const patient = patientFetchHook(location.state)

  let array = []

  for (let i = 0; i < 10; i++){
    array.push(patient.x_ray)
  }


  console.log(attachments)
    
  return (
    <div className={style.editor}>
      <h1>{formData.patientName  || patient.name}</h1>
        {formData.problem &&  <p className={style.problem}><strong>Problem:</strong>{formData.problem} </p>}
          <div className={style.flex}>
               <div className={style.width}>
               {formData.treatment && <p className={style.label}><strong>Treatment</strong></p>}
                  <p>{ formData.treatment}</p>
              </div>
              <div className={style.width}>
               {formData.suggestions && <p className={style.label}><strong>Suggestions</strong></p>}
                  <p>{formData.suggestions}</p>
              </div> 
          </div>
          <div className={style.flex}>
        <div className={style.width}>
        {formData.preliminaryFindings &&  <p className={style.label}><strong>Preliminary Findings</strong></p>}
              <p>{formData.preliminaryFindings}</p>
        </div>
        <div className={style.width}>
         {formData.prescription &&  <p className={style.label}><strong>Prescription</strong></p>}
          {prescription && prescription.map((li,i) => {
            return <p className={style.prescription}>{i+1}. {li}</p>
          })}
        </div>
      </div>
      <div className={style.attachments}>
       
        <div className={style.imageDiv}>
          {/* {attachments && attachments.map(image => {
            return <img src={image} width="300px" />
          })} */}


          {
            array && array.map(image => {
            return <img src={image} className={style.images} />
          })
          }
        </div>
      </div>
    </div>
  )
}
