import React, { Component } from 'react';
import BetSlipBet from 'components/BetSlipBet.js';

class BetSlip extends Component {
  getMarketsList() {
    const { removeFromSlip, updateStake } = this.props;
    return this.props.betSlip.map(bet => (
      <BetSlipBet
        key={bet.bet_id}
        removeFromSlip={removeFromSlip}
        updateStake={updateStake}
        {...bet}
      />
    ));
  }

  getTotalStake() {
    const total = this.props.betSlip.reduce((acc, current) => acc + parseFloat(current.stake || 0), 0).toFixed(2);
    return parseFloat(total).toFixed(2)
  }

  render() {
    const { betSlip, clearBetSlip, placeBet } = this.props;
    const betList = betSlip.length ? this.getMarketsList() : 'No bets placed';
    return (
      <bet-slip>
        <div className="bet-list">{betList}</div>
        <button type="submit" disabled={!betSlip.length} onClick={placeBet}>Submit bets</button>
        <button type="submit" disabled={!betSlip.length} onClick={clearBetSlip}>Remove all selections</button>
        <p>Total stake: {this.getTotalStake()}</p>
      </bet-slip>
    );
  }
}

export default BetSlip;
