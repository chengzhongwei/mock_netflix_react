import { ACTIONS } from '../constants'

const initialState = {
  mylist: [],
  recommendations: [],
  fetchIsLoading: false,
  fetchIsCompleted: false,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.fetch:
      return {
        ...state,
        fetchIsLoading: false,
        fetchIsCompleted: true,
        mylist: action.payload.mylist,
        recommendations: action.payload.recommendations,
      };
    case ACTIONS.fetch_rejected:
      return {
        ...state,
        fetchIsLoading: false,
        fetchIsCompleted: false,
        error: action.payload,
      }
    case ACTIONS.add:
      // Transfer the current from recommendations to mylist
      return { ...state,
        recommendations: [...state.recommendations.filter(item => item !== action.payload)],
        mylist: [...state.mylist, action.payload]
      }
    case ACTIONS.remove:
      // Transfer the current from mylist to recommendations
      return  { ...state,
        mylist: [...state.mylist.filter(item => item !== action.payload)],
        recommendations: [...state.recommendations, action.payload]
      }
    default:
      return state;
  }
}