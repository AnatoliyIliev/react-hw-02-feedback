import styles from '../FeedbackOptions/FeedbackOptions.module.scss'
const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        {options.map((option) => (
            <button
            className={styles.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}> {option}</button>
        ))} 
    </div>
)
// () => onLeaveFeedback(label)



export default FeedbackOptions;

