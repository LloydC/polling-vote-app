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
    this.submitPoll = this.submitPoll.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  submitPoll(poll){
    this.setState({question: poll});
  }

  getOptions(options){
    this.setState({options})
  }

  render(){
    return (
      <div className="App">
        <PollCreate submitPoll={this.submitPoll} getOptions={this.getOptions}/>
        <PollView question={this.state.question} options={this.state.options}/>
        <Chart/>
      </div>
    );
  }
}

export default App;
