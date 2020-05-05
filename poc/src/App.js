import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background1 from './components/background1';
import Welcome from './components/Welcome';
import DataGet from './components/DataGet';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider value = "Ragasudha">
      <Welcome/>
      </UserProvider>
    </div>
  );
}

export default App;
