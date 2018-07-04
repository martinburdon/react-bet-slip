import React, { Component } from 'react';
import BetSlipBet from 'components/BetSlipBet.js';

class BetSlip extends Component {
  getMarketsList(updateStake) {
    return this.props.betSlip.map(bet => {
      return <BetSlipBet key={bet.bet_id} updateStake={updateStake} {...bet} />
    });
  }

  render() {
    const { betSlip, clearBetSlip, placeBet, updateStake } = this.props;
    const totalStake = betSlip.reduce((acc, current) => acc + parseFloat(current.stake || 0), 0);
    return (
      <bet-slip>
        {betSlip.length ? this.getMarketsList(updateStake) : 'No bets placed'}
        <button type="submit" disabled={!betSlip.length} onClick={placeBet}>
          Submit bets
        </button>
        <button type="submit" disabled={!betSlip.length} onClick={clearBetSlip}>
          Remove all selections
        </button>
        <p>Total stake: {parseFloat(totalStake).toFixed(2)}</p>
      </bet-slip>
    );
  }
}

export default BetSlip;
