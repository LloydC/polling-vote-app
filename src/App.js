import React from 'react';
import PollCreate from './components/PollCreate';
import PollView from './components/PollView';
import Chart from './components/Chart'; 
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      question: "",
      options: []
    }
    this.submitPoll = this.submitPoll.bind(this)
  }

submitPoll(poll){
  this.setState({question: poll});
}

  render(){
    return (
      <div className="App">
        <PollCreate submitPoll={this.submitPoll}/>
        <PollView question={this.state.question}/>
        <Chart/>
      </div>
    );
  }
}

export default App;
