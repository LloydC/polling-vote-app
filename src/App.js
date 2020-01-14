import React from 'react';
import PollCreate from './components/PollCreate';
import PollView from './components/PollView';
import Chart from './components/Chart'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <PollCreate/>
      <PollView/>
      <Chart/>
    </div>
  );
}

export default App;
