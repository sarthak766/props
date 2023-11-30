import {useState} from 'react'
import './App.css';
import Chai from './chai';

function App() {
  let [counter,setCounter]= useState(15)
 // let counter = 15;
const addvalue = () =>{
  console.log("clicked",counter)
  counter = counter + 1;
  setCounter(counter)
}
  return (
    <>
   <Chai/>
     <h1>time for some action of hooks {counter}</h1>
       
      <button  onClick={addvalue}>
        Addme {counter}</button>
        <br></br>
        <footer> hello {counter}</footer>
   </>

  );
}

export default App;
