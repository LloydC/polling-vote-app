import React from 'react';
import '../css/create.css'

class PollCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {question: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ question: e.target.value });
      }
    handleClick(e){
        e.preventDefault();
        this.props.submitPoll(this.state.question)
    }
    

    render(){
        return (
            <div className="PollCreate">
                <h1>Create Poll Section</h1>
                <br/>
                <div>
                    <form action="" onSubmit={e => this.handleClick(e)}>
                    <input type="text" 
                            name="question" 
                            placeholder="Enter a question..."
                            onChange={this.handleChange}
                            value={this.state.question}
                            ></input>
                    <br/>
                    <button>Submit</button>
                    </form>
                </div>
            </div>
          );
    }
}

export default PollCreate;
