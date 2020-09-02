import React, {useState} from 'react'
import styles from './Table.module.css'
import {validateNewRequest} from "./Validator";

const Request = (props) => {
  let data = {
    company: props.company,
    ati: props.ati,
    fullName: props.fullName,
    tel: props.tel,
    comment: props.comment
  }
  let [editMode, setEditMode] = useState(false)

  const updateRequest = () => {
    if (validateNewRequest(data.company, data.ati, data.fullName, data.tel)) {
      props.changeRequest(props.number, data.company, data.ati, data.fullName, data.tel, data.comment)
      setEditMode(false)
    }
  }

  if(editMode){
    return (
      <tr>
        <td>{props.number}</td>
        <td><input className={styles.NewRequestField} type="text" defaultValue={data.company} onChange={(e) => data.company = e.target.value} /></td>
        <td><input className={styles.NewRequestField} type="text" defaultValue={data.ati} onChange={(e) => data.ati = e.target.value} /></td>
        <td><input className={styles.NewRequestField} type="text" defaultValue={data.fullName} onChange={(e) => data.fullName = e.target.value} /></td>
        <td><input className={styles.NewRequestField} type="text" defaultValue={data.tel} onChange={(e) => data.tel = e.target.value} /></td>
        <td><input className={styles.NewRequestField} type="text" defaultValue={data.comment} onChange={(e) => data.comment = e.target.value} /></td>
        <td>{props.date}</td>
        <td className={styles.changeButton} onClick={updateRequest}>Сохранить</td>
      </tr>
    );
  }else{
    return (
      <tr>
          <td>{props.number}</td>
          <td onDoubleClick={() => setEditMode(true)}>{props.company}</td>
          <td onDoubleClick={() => setEditMode(true)}><a href={'https://ati.su/firms/' + props.ati + '/info'} >{props.ati}</a></td>
          <td onDoubleClick={() => setEditMode(true)}>{props.fullName}</td>
          <td onDoubleClick={() => setEditMode(true)}>{props.tel}</td>
          <td onDoubleClick={() => setEditMode(true)}><p className={styles.commentField}>{props.comment}</p> </td>
          <td>{props.date}</td>
          <td className={styles.delButton} onClick={()=>props.delRequest(props.number)}>Удалить</td>
      </tr>
    );
  }
}

export default Request