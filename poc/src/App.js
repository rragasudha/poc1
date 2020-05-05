import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background1 from './components/background1';
import Welcome from './components/Welcome';
import DataGet from './components/DataGet';
import { UserProvider } from './components/UserContext';
import ExitHome from './components/ExitHome';

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
