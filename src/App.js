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
      votingOptions: [],
      previousVote: "",
      votingColumns: []
    }
    this.addVote = this.addVote.bind(this);
    this.submitPoll = this.submitPoll.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.resetApp = this.resetApp.bind(this);
  }

  addVote(voteName){
    let votingOptions = this.state.votingOptions;
    let columnIndex = votingOptions.indexOf(voteName);
    let votingColumns = this.state.votingColumns;
      votingColumns[columnIndex]++;
      this.setState({votingColumns, previousVote: voteName});
  }

  resetApp(){
    if(this.state.question && this.state.question.length > 0 & this.state.previousVote){
      this.setState({
        question: '',
        previousVote: '', 
        votingOptions: [],
        votingColumns: []
        })
    }
    else {
      this.setState({
        question: '',
        currentOption: '', 
        options: [],
        votingColumns: [],
        maxOptionsReached: false})
    }
    
  }

  getOptions(votingOptions, votingColumns){
    this.setState({votingOptions, votingColumns})
  }
  submitPoll(question){
    this.setState({question});
  }

  render(){
    const { question, votingOptions, votingColumns} = this.state;
    
    return (
      <div className="App">
        <PollCreate submitPoll={this.submitPoll} getOptions={this.getOptions} resetApp={this.resetApp}/>
        <PollView question={question} votingOptions={votingOptions} addVote={this.addVote}/>
        <Chart votingColumns={votingColumns} votingOptions={votingOptions}/>
      </div>
    );
  }
}

export default App;