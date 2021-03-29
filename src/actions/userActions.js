import axios from "axios"
import { ACTIONS } from '../constants'

export const fetch = () =>
  (dispatch) => {
    axios.get("http://localhost:3000/data")
      .then(response => {
        dispatch({
          type: ACTIONS.fetch,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: ACTIONS.fetch_rejected,
          payload: err
        })
      })
  }


export const add = item => {
  return {
    type: ACTIONS.add,
    payload: item,
  }
}

export const remove = item => {
  return {
    type: ACTIONS.remove,
    payload: item
  }
}