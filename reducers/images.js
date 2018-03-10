import {
  Fetch_Images_Successfull,
  Fetch_Images_Failed,
  Start_Requesting_Images,
  Reset_Images, 
} from '../actions'

import {
  initialState, 
} from './index';

export default images = (state = initialState, action) => {
  switch (action.type) {
    case Start_Requesting_Images: 
    return {...state, loading: true, hits: [...state.hits], error: false};
    case Fetch_Images_Successfull:
    return {loading: false, hits: [ ...state.hits, ...action.payload.hits], page: action.page};
    case Fetch_Images_Failed:
    return {...state, loading: false, error: true};
    case Reset_Images:
    return {...state, loading: false, hits: [], error: false};
    default:
    return state;
  }
}
