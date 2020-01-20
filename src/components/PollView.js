import React from 'react';

export default class PollView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        voteOption: ''
    }
    this.handleVote = this.handleVote.bind(this);
  }

  handleChange(e){
    const currentOption = e.target.parentNode.innerHTML.substr(23);
    this.setState({voteOption: currentOption})
  }
  handleVote(){
    this.props.addVote(this.state.voteOption);
  }

  render(){
    return (
      <div className="PollView">
        <h1>Poll View Section</h1>
          <br/>
        {this.props.question ? <h2>Poll question:{this.props.question}</h2> : null} 
        {this.props.question ? <p>Guideline: Please make sure you select only one option before sending your vote, otherwise you'll get a bug </p>: null}
         <br/>
        <ul>
         {this.props.votingOptions ? this.props.votingOptions.map(option => (
          <li key={option} style={{ listStyleType: "none" }} defaultValue={option}>
            <input type="checkbox" onChange={e => this.handleChange(e)}></input>{option}
          </li>
          )): null}
         </ul>
          <br/>
          <br/>
          <br/>
          <button onClick={()=> this.handleVote()}>Vote</button>
      </div>
    )
  }
}