<<<<<<< HEAD
<<<<<<< HEAD
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

=======
import logo from './logo.svg';
import './App.css';
=======
>>>>>>> bef65b0 (initial commit)

import './App.css';
import Card from './Card'
function App() {
  return (
    <>
      <h1 className="text-1xl font-bold underline mycenter">
      Hello world!
    </h1>
      <div className='mycenter'>
      <Card username={"aarush bhai"} btntext={"visitme"}/>
      <Card username={"rahul bhai"} btntext={"showme" }/>
    </div>
<<<<<<< HEAD
>>>>>>> 7ec818b (Initialize project using Create React App)
=======
    </>
>>>>>>> bef65b0 (initial commit)
  );
}

export default App;
