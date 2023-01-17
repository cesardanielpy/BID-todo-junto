

import './App.css';


import PersonCard from './PersonCard';
import { useState } from 'react'

const App = () => {
  const [age1, setAge1]= useState(45);
  const incrementAge1 = () => { 
    setAge1(age1 + 1); 
  }
  const [age2, setAge2]= useState(88);
  const incrementAge2 = () => { 
    setAge2(age2 + 1); 
  }

  return (
    <div className="App">
    <PersonCard lastName="Doe" firstName="Jane" age={age1} hairColor="Black" incrementAge={incrementAge1}/>
    <PersonCard lastName="Jhon" firstName="Smith" age={age2} hairColor="Black" incrementAge={incrementAge2}/>


    </div>
  );
}

export default App;
