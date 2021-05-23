
import logedReduser from './isLogedIn';
import {allReducers, combineReducers}from 'redux';
import counterReducer from './Counter';
import combineReducers from  'redux'



const allReducers=combineReducers({
    myCounter: counterReducer,
    islogedIn:  logedReduser,
});
export default allReducers