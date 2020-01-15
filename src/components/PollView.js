import React from 'react';

function PollView(props) {
  return (
    <div className="PollView">
        <h1>Poll View Section</h1>
        <br/>
        <h2>{props.question}</h2>
    </div>
  );
}

export default PollView;
