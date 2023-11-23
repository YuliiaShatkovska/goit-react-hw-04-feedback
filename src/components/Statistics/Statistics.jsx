import { Section } from 'components/Section/Section';
import css from './Statistic.module.css';

export const Statistics = ({ good, bad, neutral, total, percentage }) => {
  return (
    <div className={css.statistics_container}>
      <Section title="Statistics" />

      <ul className={css.statistics_list}>
        <li className={css.statistic_item}>
          <p className={css.statistics_text}>Good: </p>
          <span className={css.statistics_value}>{good}</span>
        </li>
        <li className={css.statistic_item}>
          <p className={css.statistics_text}>Neutral: </p>
          <span className={css.statistics_value}>{neutral}</span>
        </li>
        <li className={css.statistic_item}>
          <p className={css.statistics_text}>Bad: </p>
          <span className={css.statistics_value}>{bad}</span>
        </li>
        <li className={css.statistic_item}>
          <p className={css.statistics_text}>Total: </p>
          <span className={css.statistics_value}>{total}</span>
        </li>
        <li className={css.statistic_item}>
          <p className={css.statistics_text}>Positive feedback: </p>
          <span className={css.statistics_value}>{percentage}%</span>
        </li>
      </ul>
    </div>
  );
};
