import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/greeting'
import Bg from './component/bgjsx';
import Message from './component/message';
import Counter from './component/couter';
import Parent from './component/parent';
import List from './component/list';
import Form from './component/form';

function App() {
  return (
    <div className="App">
      <Greet/>
       <Form/>
      <List/>
      <Bg name = "Rajasree" />
      <Message/>
      <Counter/>
      <Parent/>
      
     
    </div>
  );
}

export default App;
