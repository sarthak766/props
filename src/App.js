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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 7ec818b (Initialize project using Create React App)
  );
}

export default App;
