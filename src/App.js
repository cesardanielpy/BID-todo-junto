

import './App.css';


import PersonCard from './PersonCard';


const App = () => {
  
  return (
    <div className="App">
    <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" cumple="Birthday Button for Jane Doe">
    </PersonCard>
    <PersonCard lastName="Jhon" firstName="Smith" age={88} hairColor="Brown" cumple="Birthday Button for Jhons Smith">
    </PersonCard>
    </div>
  );
}

export default App;
