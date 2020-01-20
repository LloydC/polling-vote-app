import React from 'react';
import '../css/create.css'

export default class PollCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question: '',
            currentOption: '', 
            options: [],
            votingColumns: [],
            maxOptionsReached: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleReset(){
        this.props.resetApp();
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    handleClick(e){
        e.preventDefault();
        this.props.submitPoll(this.state.question);
        this.setState({question: ''})
    }
    handleOptions(e){
        e.preventDefault();
        if(this.state.options.length <= 9){
            let newOptions = this.state.options;
            let addVoteColumn = this.state.votingColumns;
            newOptions.push(this.state.currentOption)
            addVoteColumn.push(0)
            this.props.getOptions(newOptions, addVoteColumn); //passing "newOptions" to App via props
            this.setState({options: newOptions,votingColumns: addVoteColumn, currentOption: '', maxOptionsReached: false});
        }
        else{
            this.setState({maxOptionsReached: true});
        }       
    }
    removeOption(e){
        let arr = this.state.options
        let removeColumn = this.state.votingColumns;
        const removeOptionName = e.target.previousSibling.value;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === removeOptionName){
                arr.splice(i, 1);
                removeColumn.splice(i, 1);
            }
        }
        this.props.getOptions(arr, removeColumn); //passing "arr" to App via props
        this.setState({options: arr, votingColumns: removeColumn, currentOption: ''});
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
                                maxLength="80"
                                ></input>
                        <button>Submit</button>
                    </form>
                    <br/>
                    <form action="" onSubmit={e => this.handleOptions(e)}>
                        <input type="text" 
                                name="currentOption" 
                                placeholder="Enter an option..."
                                onChange={this.handleChange}
                                value={this.state.currentOption}
                                maxLength="80"
                                ></input>
                        <button>Submit</button>
                    </form>
                    <br/>
                    {this.state.options.map(option => {
                        return <div key={option}><input type="text" defaultValue={option}></input><button onClick={e => this.removeOption(e)}>X</button></div>
                    })}
                    <br/>
                    <br/>
                    <br/>
                    <div>
                {this.state.options.length ? <span>{this.state.options.length}/10 possible answers</span> : <span>0/10 possible answers</span> }
                <br/>
                {this.state.maxOptionsReached ? <span style={{color : "red"}}>Maximum number of options has been reached </span> : null}
                <br/>
                    <button onClick={()=>this.handleReset()}>Reset</button>
                    </div>
                </div>
            </div>
          );
    }
}