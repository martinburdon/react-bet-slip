import React, { Component } from 'react';
import MarketListBet from 'components/MarketListBet/MarketListBet.js';

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
      <MarketListBet
        active={active}
        addToSlip={this.addToSlip}
        className={className}
        event={event}
        name={name}
        odds={odds}
      />
    );
  }
}

export default Bet;
