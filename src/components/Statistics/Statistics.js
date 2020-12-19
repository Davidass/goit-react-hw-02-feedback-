import PropTypes from 'prop-types';
import s from './Statistics.module.css';

import Notification from 'components/Notifacation';

function Statistics(props) {
  const { good, neutral, bad, total, positiveFeedback } = props;
  return (
    <>
      {total > 0 && (
        <ul className={s.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positiveFeedback}%</li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
