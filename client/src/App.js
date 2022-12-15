import { useState } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import LogIn from './components/LogIn';
import MainComponent from './components/MainComponent';


function App() {

  const [isLogIn,setIsLogIn] = useState(true);
  return (
    <div className="App">
    <HeaderComponent />
    {
      isLogIn ?
      <LogIn setIsLogIn={setIsLogIn}/>
      : <MainComponent setIsLogIn={setIsLogIn}/>
    }
    </div>
  );
}

export default App;
