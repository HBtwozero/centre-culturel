  
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {
  bookListReducer,
  bookDetailsReducer
} from '../redux/reducers/bookReducers'
const initialState = {
   
  };
const reducer = combineReducers({ 
    bookList: bookListReducer,
    bookDetails: bookDetailsReducer

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
