import React from 'react';

export default class PollView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        selectedOption: ''
    }
    this.handleVote = this.handleVote.bind(this);
  }

  handleChange(e){
    const currentOption = e.target.parentNode.innerHTML.substr(23);
    this.setState({selectedOption: currentOption})
  }
  handleVote(){
    this.props.submitVote(this.state.selectedOption);
  }

  render(){
    return (
      <div className="PollView">
        <h1>Poll View Section</h1>
          <br/>
        {this.props.question ? <h2>Poll question:{this.props.question}</h2> : null} 
         <br/>
        <ul>
         {this.props.options.map(option => (
          <li key={option} style={{ listStyleType: "none" }} defaultValue={option}>
            <input type="checkbox" onChange={e => this.handleChange(e)}></input>{option}
          </li>
          ))}
         </ul>
          <br/>
          <br/>
          <br/>
          <button onClick={()=> this.handleVote()}>Vote</button>
      </div>
    )
  }
}
