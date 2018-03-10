import { 
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import {
  rootReducer,
} from './../reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './../reducers'; 

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__})

function configureStore(initalState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )

  return createStore(reducer, initalState, enhancer);

}

const store = configureStore({});

export default store;
