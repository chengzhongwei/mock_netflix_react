const initialState = {
  mylist: [],
  recommendations: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        fetching: false,
        fetched: true,
        mylist: action.payload.mylist,
        recommendations: action.payload.recommendations,
      };
      break;
    case "ADD":
      // Transfer the current from recommendations to mylist
      return { ...state,
        recommendations: [...state.recommendations.filter(item => item !== action.payload)],
        mylist: [...state.mylist, action.payload]
      }
      break;

    case "REMOVE":
      // Transfer the current from mylist to recommendations
      return  { ...state,
        mylist: [...state.mylist.filter(item => item !== action.payload)],
        recommendations: [...state.recommendations, action.payload]
      }
      break;
    default:
      return state;
  }
}