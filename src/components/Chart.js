import React from 'react';
import { Bar } from 'react-chartjs-2';

export default class Chart extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    
   const calcSum = ()=> {
      let sum = 0;
      for(let i = 0; i < this.props.votingColumns.length; i++){
        sum += this.props.votingColumns[i];
      }
      return sum;
    }

    const percentages = this.props.votingColumns.map(value => {
      return (value * 100) / calcSum();
    })
  
    const parseData = (votingOptions, votingColumns) => ({
      labels: votingOptions,
      datasets: [
        {
          label: 'The polls awakening',
          backgroundColor: votingColumns.map(column => {
            return 'rgba(255, 99, 132, 0.2)'
          }),
          borderColor: votingColumns.map(column => {
            return 'rgba(54, 162, 235, 0.2)'
          }),
          borderWidth: 5,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: percentages
        }
      ]
    })
  
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      maintainAspectRatio: false
    }

    return (
      <div className="Chart">
          <h1>Chart Section</h1>
          <br/>
          {calcSum() > 0 ? <span>Number of votes: {calcSum()}</span> : null}
          <Bar
          data={parseData(this.props.votingOptions, this.props.votingColumns)}
          width={1}
          height={2}
          options={options}
          />
      </div>
    );
  } 
}