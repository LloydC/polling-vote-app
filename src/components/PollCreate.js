import React from 'react';
import '../css/create.css'

class PollCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question: '',
            currentOption: '', 
            options: [], 
            maxOptionsReached: false}
        this.handleChange = this.handleChange.bind(this)
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
            newOptions.push(this.state.currentOption)
            this.props.getOptions(newOptions); //passing "newOptions" to App via props
            this.setState({options: newOptions, currentOption: '', maxOptionsReached: false});
        }
        else{
            this.setState({maxOptionsReached: true});
        }       
    }
    removeOption(e){
        let arr = this.state.options
        const removeOptionName = e.target.previousSibling.value;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === removeOptionName){
                arr.splice(i, 1);
            }
        }
        this.props.getOptions(arr); //passing "arr" to App via props
        this.setState({options: arr, currentOption: ''});
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
                        <button>Submit</button>
                    </form>
                    <br/>
                    <form action="" onSubmit={e => this.handleOptions(e)}>
                        <input type="text" 
                                name="currentOption" 
                                placeholder="Enter an option..."
                                onChange={this.handleChange}
                                value={this.state.currentOption}
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
                    <button>Reset</button>
                    </div>
                </div>
            </div>
          );
    }
}

export default PollCreate;
