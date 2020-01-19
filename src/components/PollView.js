import React from 'react';

function PollView(props) {
  return (
    <div className="PollView">
      <h1>Poll View Section</h1>
        <br/>
      {props.question ? <h2>Poll question:{props.question}</h2> : null} 
       <br/>
      <ul>
       {props.options.map(option => (
        <li key={option} style={{ listStyleType: "none" }}>
          <input type="radio"></input>{option}
        </li>
        ))}
       </ul>
        <br/>
        <br/>
        <br/>
        <button>Vote</button>
    </div>
  );
}

export default PollView;
