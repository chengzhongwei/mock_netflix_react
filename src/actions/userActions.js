import axios from "axios"
import data from '../data'

export const fetch = () =>
  dispatch => {
    dispatch({
      type: "FETCH",
      payload: data
    })
  }

/*
// Because API is not given, the mock data is imported from JSON file
export const fetch = () =>
  function(dispatch) {
    axios.get("http://netflix.com/list.json")
      .then(response => {
        dispatch({
          type: "FETCH",
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: "FETCH_REJECTED",
          payload: err
        })
      })
  }
*/

export const add = item => {
  return {
    type: 'ADD',
    payload: item,
  }
}

export const remove = item => {
  return {
    type: 'REMOVE',
    payload: item
  }
}