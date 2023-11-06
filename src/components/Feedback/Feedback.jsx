import React from 'react';
import { Notification } from './FeedbackNotification';
import { Section } from './FeedbackSection';
import { Statistics } from './FeedbackStatistics';
import { useFeedback } from '../Hooks/useFeedback'; 

const App = () => {
  const { feedback, handleFeedback } = useFeedback(); 

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage =
    totalFeedback === 0 ? 0 : (feedback.good / totalFeedback) * 100;

  return (
    <div>
      <Section title="Please leave feedback">
        <button onClick={() => handleFeedback('good')}>Good</button>
        <button onClick={() => handleFeedback('neutral')}>Neutral</button>
        <button onClick={() => handleFeedback('bad')}>Bad</button>
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
