import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return{
        ...state,
        fetching: true,
      }
    case SUCCESS:
      console.log(action.payload)
      return{
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
        // why ... before action needed?
      }
    case FAILURE:
      console.log(action.payload)
      return{
        ...state,
        fetching: false,
        error: action.payload
      }
    
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
