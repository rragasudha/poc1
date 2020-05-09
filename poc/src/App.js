import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
//import DataGet from './components/DataGet';
import { UserProvider } from './components/UserContext';
import ExitHome from './components/ExitHome';
//import Start from './components/Start';





function App() {
  return (
    <div className="App">
     <Welcome></Welcome>
      <UserProvider value = "Ragasudha">
      <ExitHome/>
      </UserProvider>
    </div>
  );
}

export default App;
