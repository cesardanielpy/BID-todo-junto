

import './App.css';


import PersonCard from './PersonCard';
import { useState } from 'react'

const App = () => {
  return (
    <div className="App">
    <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black"/>
    <PersonCard lastName="Jhon" firstName="Smith" age={88} hairColor="Black"/>


    </div>
  );
}

export default App;
