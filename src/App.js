import React, { Component } from "react";
import Statistics from './components/Statistics'
import FeedbackOptions from './components/FeedbackOptions'
class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
  };

  countGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  countNeutralFeedback = () => {

    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  
  countTotalFeedback() {
    return(    
     this.state.good + this.state.neutral + this.state.bad)
    };
  

  countPositiveFeedbackPercentage() {
    let percentage = Math.floor(( this.state.good / this.countTotalFeedback()) * 100);  
    return percentage;
  };
    
    render() {
        return (
            <div>
            <h1>Please leave feedback</h1>
            <FeedbackOptions options={countGoodFeedback, countNeutralFeedback,countBadFeedback} onLeaveFeedback={2}/>                
            <h2>Statistics</h2>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}/>          
            </div>
        ) 
    };
}

export default App;
