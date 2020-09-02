import React, {useState} from 'react'
import styles from './Table.module.css'
import {validateNewRequest} from "./Validator";

const NewRequestRow = (props) => {

  let [company, setCompany] = useState('');
  let [ati, setAti] = useState('');
  let [fullName, setFullName] = useState('');
  let [tel, setTel] = useState('');
  let [comment, setComment] = useState('');

  const createRequest = () => {
    if (validateNewRequest(company, ati, fullName, tel)) {
      props.addRequest(company, ati, fullName, tel, comment)
      setCompany('')
      setAti('')
      setFullName('')
      setTel('')
      setComment('')
    }
  }

  return (
    <tr>
      <td/>
      <td><input className={styles.NewRequestField} type="text" value={company} onChange={(e) => setCompany(e.target.value)} /></td>
      <td><input className={styles.NewRequestField} type="number" value={ati} onChange={(e) => setAti(e.target.value)} /></td>
      <td><input className={styles.NewRequestField} type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} /></td>
      <td><input className={styles.NewRequestField} type="number" value={tel} onChange={(e) => setTel(e.target.value)} /></td>
      <td><textarea className={styles.NewRequestField} value={comment} onChange={(e) => setComment(e.target.value)} /></td>
      <td/>
      <td className={styles.addButton} onClick={createRequest}>Создать</td>
    </tr>
  )
}

export default NewRequestRow