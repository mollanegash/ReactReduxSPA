// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {createStore,combineReducers} from 'redux'
// import isLogedIn from './Reducers/isLogedIn';
// // import { combineReducers } from 'redux';
// // import {combineReducers} from 'redux'

// import{Provider} from 'react-redux'


// import allReducers from './Reducers';



// const myStore=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// //or
// //const store =createStore(counter,isLogedIn)
// //store=> a globalized state


// //acction=> incremnet
// // const increment=()=>{
// //     return{
// //         type: 'increment'
// //     }
// // }



// // const decrement=()=>{
// //     return {
// //         type: 'decrement'
// //     }
// // }

// // //reducer=>

// // const counter=(state=0,action)=>{
// //     switch (action.type){
// //         case 'increment':
// //         return state+1;

// // case 'decrement':
// //     return state-1;

// //     default:
// //         return state;
   

// //     }


// // }
// // //store=> a globalized state
// // let store=createStore(counter);
// // //dispay it in the counsole
// // store.subscribe(()=>console.log(store.getState()));
// // //dispacher=>

// // store.dispatch(increment())
// // store.dispatch(decrement())
// // store.dispatch(decrement())
// // store.dispatch(decrement())

// ReactDOM.render(
// <Provider store={myStore}>
//     <App /> 
// </Provider>,
//     document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
