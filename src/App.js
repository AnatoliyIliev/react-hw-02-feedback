import React, { Component } from "react";
import Statistics from './components/Statistics'
import FeedbackOptions from './components/FeedbackOptions'
class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
  };  

  // countGoodFeedback = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // countNeutralFeedback = () => {

  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // countBadFeedback = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

   countFeedback = () => {
     this.setState(option =>
     ({      
      [option]: this.state[option] + 1,
     })
     );
  };
    
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return(    
     good + neutral + bad)
    };   

  countPositiveFeedbackPercentage() {
    let percentage = Math.floor(( this.state.good / this.countTotalFeedback()) * 100);  
    return percentage;
  };
    
  render() {
    const { good, neutral, bad } = this.state;
        return (
            <div>
              <h1>Please leave feedback</h1>
              <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={this.countFeedback} />
              <h2>Statistics</h2>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}/>          
            </div>
        ) 
    };
}

export default App;
