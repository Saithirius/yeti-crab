import React from 'react'
import { connect } from 'react-redux';
import {addRequest, delRequest, changeRequest, requestsSort} from '../Redux/Table-reducer';
import Request from './Request';
import NewRequestRow from './NewRequestRow';
import styles from './Table.module.css'

let Table = (props) => {
  return (
    <div className={styles.table}>
      <h1 className={styles.caption}>Таблица с заявками</h1>
      <table>
        <thead><tr>
          <th onClick={()=>props.requestsSort('number')}>Номер заявки</th>
          <th onClick={()=>props.requestsSort('company')}>Навзание фирмы</th>
          <th onClick={()=>props.requestsSort('ati')}>ATI код</th>
          <th onClick={()=>props.requestsSort('fullName')}>ФИО</th>
          <th onClick={()=>props.requestsSort('tel')}>Телефон</th>
          <th>Комментарий</th>
          <th onClick={()=>props.requestsSort('date')}>Дата и время<br />получения заявки</th>
        </tr></thead>
        <tbody>
          <NewRequestRow addRequest={props.addRequest}/>
          {props.requests
            .map((request) => <Request key={Math.random()} {...request} delRequest={props.delRequest} changeRequest={props.changeRequest}/>)}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    requests: state.tableReducer.requests
  };
};

export default connect(mapStateToProps, {addRequest, delRequest, changeRequest, requestsSort})(Table)