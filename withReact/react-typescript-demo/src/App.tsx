import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Inputs from './components/Input';
import Container from './components/Container';
import loggedIn from './components/state/LoggedIn';
import TypeAssertion from './components/state/TypeAssertion';
import Counter from './components/state/Counter';
import User from './components/state/User';
import './App.css';
import { idText } from 'typescript';
import React, { useState } from 'react';
import LoggedIn from './components/state/LoggedIn';
import Box from './components/context/Box';
import ThemeContextProvider from './components/context/ThemeContext';
import Users from './components/context/Users';
import UserContextProvider from './components/context/UserContext';
import Users2 from './components/context/Users2';
import UserContextProvider2 from './components/context/UserContext2';
import { CounterClass } from './components/class/classComponent';
import DomRefs from './components/refs/DomRefs';
import Page from './components/Auth/Page';
import List from './components/generics/List';
import Toast from './components/templateliterals/Toast';
import CustomInput from './components/CustomHTML/CustomInput';
import Profile from './components/Auth/Profile';
import Text from './components/polymorphic/Text';
import RandomNumber from './components/restrictions/RandomNumber';
import CustomButton from './components/CustomHTML/CustomButton';
import CustomComponent from './components/CustomHTML/CustomComponent';

// export type SetLoginStateProp = {
//   setIsLoggedIn : React.Dispatch<React.SetStateAction<boolean>>
// }
 


function App() {

  const personName  = {
    first : 'Sahil',
    last: 'Tuladhar'
  }

 
  const [input , setInput] = useState(' ')
  const [isLoggedIn , setIsLoggedIn] = useState<boolean>(false)
   
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
      {/* <PersonList persons = {personList}/> */}

      {/* <Status status = 'loading' /> 
      <Heading>This is the header Component Child text</Heading>
      <Oscar>
        <Heading>The Oscar goes to Vinicus</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event ,id )=>(
        console.log("Button has been Clicked" , event , id)
        
      )}/> */}

      {/* <Inputs value ={input} handleChange={(event) => {
        console.log("Input Changed" , event)
        setInput(event.target.value)
      }}/> */}

      {/* <Container styles ={containerStyles}/>
       */}

       {/* <LoggedIn />
       <User /> */}

       {/* <TypeAssertion />
       <Counter />

       <ThemeContextProvider> 
         <Box/>
       </ThemeContextProvider> */}
{/* 
      <UserContextProvider>
        <Users/>
      </UserContextProvider> */}

      {/* <UserContextProvider2>
        <Users2/>
      </UserContextProvider2> */}

      {/* <DomRefs/>

      <CounterClass message='Hi Please check out my counter'/>

      <Page isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} component={Profile}/>

       <List 
       items = {['Sahil' , 'Messi' , 'Saka']}
        onClick={(item) => console.log(item)
        }
       />

<List 
       items = {[1 , 2, 3]}
        onClick={(item) => console.log(item)
        }
       />
   <RandomNumber value = {10} isPos/> */}

   <Toast position={'center'}/>
<CustomButton variant='secondary' onClick={() => console.log('Clicked')}>Secondary Button</CustomButton>
  <CustomInput placeholder = 'Enter your username' value={input} onChange={(e) => setInput(e.target.value)}/>
    <CustomComponent name='Sahil' isLoggedIn = {true} />

    <Text as ='h1' size='lg' color='primary'>Header</Text>
    <Text as = 'p' size='md' color='secondary'> This is a paragraph and the content is large</Text>
    <Text as = 'label' labelFor = 'someID' size='sm' color='secondary'>Label</Text>
      
      
       

    
    </div>
  );
  
}

export default App;
