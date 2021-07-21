import React, {Component} from "react";
import styles from './components/FeedbackOptions/FeedbackOptions.module.scss'


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
                <div>
                    <button className={styles.button} type="button" onClick={this.countGoodFeedback}> Good</button>
                    <button className={styles.button} type="button" onClick={this.countNeutralFeedback}> Neutral</button>
                    <button className={styles.button} type="button" onClick={this.countBadFeedback}> Bad</button>
                </div>
                <h2>Statistics</h2>
            
            {
              <ul>       
                  <li>Good: {this.state.good}</li>
                  <li>Neutral: {this.state.neutral}</li>
                  <li>Bad: {this.state.bad}</li>
                  <li>Total: {this.countTotalFeedback()}</li>
                  <li>Positive percentage: {this.countPositiveFeedbackPercentage()}%</li>     
              </ul>
            }
            </div>
        ) 
    };
}
// function App() {
//   return (
//     <div>
//       <Feedback/>

//     </div>
//   )
// }

export default App;
