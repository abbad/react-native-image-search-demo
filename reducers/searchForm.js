import {
  Set_Search_Text,
} from '../actions'

import {
  initialState, 
} from './index';

export default searchForm = (state = initialState, action) => {
  switch (action.type) {
    case Set_Search_Text:  
    const searchButtonDisabled = action.text.length === 0;
    return {...state, searchButtonDisabled, text: action.text};
    default:
    return state;
  }
}
