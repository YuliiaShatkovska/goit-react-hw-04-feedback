import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveReview = option => {
    if (option === 'good') setGood(good + 1);
    if (option === 'neutral') setNeutral(neutral + 1);
    if (option === 'bad') setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    const totalFeedback = [good, neutral, bad];

    const total = totalFeedback.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    const positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage);
  };

  return (
    <div className="container">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveReview={onLeaveReview}
      />
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
};
