import styles from '../FeedbackOptions/FeedbackOptions.module.scss'
const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        <button className={styles.button} type="button" onClick={options.countGoodFeedback}> Good</button>
        <button className={styles.button} type="button" onClick={options.countNeutralFeedback}> Neutral</button>
        <button className={styles.button} type="button" onClick={options.countBadFeedback}> Bad</button>
    </div>
)

export default FeedbackOptions;

