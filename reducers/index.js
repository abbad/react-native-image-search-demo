import { 
  combineReducers,
} from 'redux';

import searchForm from './searchForm';
import images from './images';

export const initialState = {
  text: '',
  searchButtonDisabled: true, 
  error: false, 
  hits: [],
  loading: false, 
};

export default rootReducer = combineReducers(
  {
    searchForm, 
    images,
  }
);
