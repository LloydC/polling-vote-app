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
      options: [],
      vote: "",
      votingColumns: []
    }
    this.submitPoll = this.submitPoll.bind(this);
    this.submitVote = this.submitVote.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  submitPoll(poll){
    this.setState({question: poll});
  }

  submitVote(vote){
   this.setState({vote})
  }

  getOptions(options, votingColumns){
    console.log(this.state.options)
    console.log(options.length)
    console.log(votingColumns)
    this.setState({options, votingColumns})
  }

  render(){
    return (
      <div className="App">
        <PollCreate submitPoll={this.submitPoll} getOptions={this.getOptions}/>
        <PollView question={this.state.question} options={this.state.options} submitVote={this.submitVote}/>
        <Chart vote={this.state.vote}/>
      </div>
    );
  }
}

export default App;
