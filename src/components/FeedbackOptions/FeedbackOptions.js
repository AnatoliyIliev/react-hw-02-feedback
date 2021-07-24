// import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.scss'
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map((option) => (
            <button
            className={styles.button}
            type="button"
            key={shortid.generate()}
            onClick={() => onLeaveFeedback(option)}> {option}</button>
        ))} 
    </div>
)

export default FeedbackOptions;