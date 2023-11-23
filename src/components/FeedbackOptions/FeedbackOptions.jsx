import { Section } from 'components/Section/Section';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveReview }) => {
  return (
    <div className={css.feedback_container}>
      <Section title="Please leave feedback" />
      <ul className={css.button_list}>
        {options.map((option, index) => (
          <li key={index}>
            <button
              className={css.button_feedback}
              onClick={() => onLeaveReview(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
