import React from 'react';
import '../css/create.css'

function PollCreate() {
  return (
    <div className="PollCreate">
        <h1>Create Poll Section</h1>
        <br/>
        <input type="text" name="question" value="Enter a question..."></input>
        <br/>
        <input type="submit"/>
    </div>
  );
}

export default PollCreate;
