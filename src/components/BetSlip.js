import React, { Component } from 'react';
import BetSlipBet from 'components/BetSlipBet.js';
import PlaceBet from 'components/PlaceBet.js';

class BetSlip extends Component {
  getMarketsList() {
    const { betSlip, removeFromSlip, updateStake } = this.props;
    return betSlip.map(bet => (
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
    const betList = betSlip.length ? this.getMarketsList() : <p className="no-bets">No bets placed</p>;
    const totalStake = this.getTotalStake();

    return (
      <bet-slip>
        <button
          className="clear-betslip"
          type="submit"
          disabled={!betSlip.length}
          onClick={clearBetSlip}>
          Clear betslip
        </button>
        <div className="bet-list">{betList}</div>
        <PlaceBet totalStake={totalStake} placeBet={placeBet} />
      </bet-slip>
    );
  }
}

export default BetSlip;
