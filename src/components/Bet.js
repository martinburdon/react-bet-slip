import React, { Component } from 'react';

class Bet extends Component {
  addToSlip = () => {
    if (!this.props.active) {
      this.props.addToSlip(this.props.bet_id);
    }
  }

  render() {
    const { active, event, name, odds } = this.props;
    const className = active ? 'bet-item active' : 'bet-item';
    return (
      <div onClick={this.addToSlip} className={className}>
        <p>{name}</p>
        <p>{event}</p>
        <p>{odds.numerator}/{odds.denominator}</p>
      </div>
    )
  }
}

export default Bet;
