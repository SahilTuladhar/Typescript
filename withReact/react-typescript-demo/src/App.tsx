import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Inputs from './components/Input';
import Container from './components/Container';
import './App.css';
import { idText } from 'typescript';
import React, { useState } from 'react';

function App() {

  const personName  = {
    first : 'Sahil',
    last: 'Tuladhar'
  }
   
  const [input , setInput] = useState(' ')
   
  const personList = [{
    first: 'Bruce',
    last: 'Wayne'
  } , 
  {
    first: 'Clark',
    last: 'Kent'
  }]

  const containerStyles: React.CSSProperties= { 
    border : '1px solid black',
    position : 'fixed',
    top : '40%',
    left: '40%',
    padding : '1rem',
    borderRadius : '12px'
  }

  return (
    <div className="App">

      {/* <Greet isLoggedIn = {false} name = 'Sahil'/> */}
      {/* <Person fullName = {personName}/> */}
      <PersonList persons = {personList}/>

      {/* <Status status = 'loading' /> 
      <Heading>This is the header Component Child text</Heading>
      <Oscar>
        <Heading>The Oscar goes to Vinicus</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event ,id )=>(
        console.log("Button has been Clicked" , event , id)
        
      )}/> */}

      <Inputs value ={input} handleChange={(event) => {
        console.log("Input Changed" , event)
        setInput(event.target.value)
      }}/>

      <Container styles ={containerStyles}/>
      
    </div>
  );
  
}

export default App;
