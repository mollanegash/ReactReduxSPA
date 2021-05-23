import React from 'react';



import './App.css';
import {useSelector} from 'react-redux'
import {increment} from './Actions'
import {dispatch} from 'react-redux'



function App() {
  const counter=useSelector(state=>state.counter);
 const islogedIn=useSelector(state=>state.islogedIn);
const dispatch=dispatch()
  return (
    <div className="app" >
     <h1>counter {counter}</h1>
     <button onClick={()=>dispatch(increment())} ></button>
     <button></button>
     {islogedIn? <h3>no see</h3>:''}

    </div>
  );
}

export default App;
