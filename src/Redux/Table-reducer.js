import {api} from "../API/api";

const ADD_REQUEST = 'ADD-REQUEST'
const DEL_REQUEST = 'DEL-REQUEST'
const CHANGE_REQUEST = 'CHANGE-REQUEST'
const REQUESTS_SORT = 'REQUESTS-SORT'

let initialState = {
  lastRequestNumber: 0,
  requests: [
    // {number: 1, company: 'Первая компания', ati: 23012, fullName: 'Иванов Иван Иванович', tel: '+7 900 000-00-00', comment: '...', date: '02.09.2020, 18:03:34'},
  ]
}

const TableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        requests: [action.newRequest, ...state.requests],
        lastRequestNumber: state.lastRequestNumber + 1
      };
    case DEL_REQUEST:
      return {
        ...state,
        requests: state.requests.filter(request => request.number !== action.number)
        // requests: []
      };
    case CHANGE_REQUEST:
      return {
        ...state,
        requests: state.requests.map(request => (request.number === action.number) ? {...request, company: action.company, ati: action.ati, fullName: action.fullName, tel: action.tel, comment: action.comment} : request)
      };
    case REQUESTS_SORT:
        return {
          ...state,
          requests: [...state.requests.sort((a, b) => {
            if (a[action.sortAttribute] < b[action.sortAttribute]) {
              return 1;
            }
            if (a[action.sortAttribute] > b[action.sortAttribute]) {
              return -1;
            }
            return 0;
          })]
      };
    default:
      return state;
  }
}

export const initApp = () => (dispatch) => {
  api.init()
  const requests = api.getRequests()
  for (let i = 0; i < requests; i++){
    dispatch({ type: ADD_REQUEST, newRequest: requests[i]})
  }
  dispatch(requestsSort('number'))
}
export const addRequest = (company, ati, fullName, tel, comment) => (dispatch) => {
  const newRequest = {
    number: parseInt(api.getLastNumber()) + 1,
    company: company,
    ati: ati,
    fullName: fullName,
    tel: tel,
    comment: comment,
    date: new Date().toLocaleString()}
  api.saveRequest(newRequest)
  dispatch({ type: ADD_REQUEST, newRequest: newRequest})
};
export const delRequest = (number) => (dispatch) => {
  api.delRequest(number.toString())
  dispatch({ type: DEL_REQUEST, number: number })
};
export const changeRequest = (number, company, ati, fullName, tel, comment) => (dispatch) => {
  let request = JSON.parse(api.getRequest(number))
  const newRequest = {
    number: number,
    company: company,
    ati: ati,
    fullName: fullName,
    tel: tel,
    comment: comment,
    date: request.date
  }
  api.saveRequest(newRequest)
  dispatch({ type: CHANGE_REQUEST, number, company, ati, fullName, tel, comment })
};
export const requestsSort = (sortAttribute) => ({ type: REQUESTS_SORT, sortAttribute})

export default TableReducer