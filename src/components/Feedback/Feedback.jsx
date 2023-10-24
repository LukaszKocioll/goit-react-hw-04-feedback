import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from './FeedbackNotification';
import { Section } from './FeedbackSection'
import { Statistics } from "./FeedbackStatistics";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
  }

  render() {
    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <button onClick={() => this.handleFeedback('good')}>Good</button>
          <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
          <button onClick={() => this.handleFeedback('bad')}>Bad</button>
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}


export default App;
