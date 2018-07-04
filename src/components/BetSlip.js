import React, { Component } from 'react';

class BetSlip extends Component {
  getMarketsList() {
    return this.props.bets.map(bet => {
      return (
        <bet-item key={bet.bet_id}>
          <p>{bet.bet_id}</p>
          <p>{bet.stake}</p>
        </bet-item>
      )
    });
  }

  render() {
    return (
      <bet-slip>
        {this.props.bets.length ? this.getMarketsList() : 'No bets placed'}
      </bet-slip>
    );
  }
}

export default BetSlip;
