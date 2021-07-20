import React, {Component} from "react";
import styles from './Feedback.module.scss';

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <div>
                    <button className={styles.button} type="button" > good</button>
                    <button className={styles.button} type="button" > Neutral</button>
                    <button className={styles.button} type="button" > Bad</button>
                </div>
                <h2>Statistics</h2>
                {/* <ul>
                    {state.map((stat) => 
                        (<li>{ stat }</li>))}
                </ul> */}

            </div>
        ) 
    };

    
}






export default Feedback;

