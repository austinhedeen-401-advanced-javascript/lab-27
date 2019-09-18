import React from 'react';

/**
 * Contains a counter that can be incremented and decremented.
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  /**
   * Increments the count.
   */
  handleUp = () => {
    const count = this.state.count + 1;
    this.updateCounter(count);
  };

  /**
   * Decrements the count.
   */
  handleDown = () => {
    const count = this.state.count - 1;
    this.updateCounter(count);
  };

  /**
   * Sets the count state with the given value, and a polarity value based on
   * the current count's sign.
   * @param count
   */
  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  render() {
    const classes = ['count', this.state.polarity].join(' ');
    return (
      <section className="counter">
        <button className="decrement" onClick={this.handleDown}>-</button>
        <span className={classes}>{this.state.count}</span>
        <button className="increment" onClick={this.handleUp}>+</button>
      </section>
    );
  }
}

export default Counter;
