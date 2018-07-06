import React, { Component } from 'react';
import BetSlipBetContainer from 'components/BetSlipBet/BetSlipBetContainer.js';
import BetSlip from 'components/BetSlip/BetSlip.js';

class BetSlipContainer extends Component {
  getMarketsList() {
    const { betSlip, removeFromSlip, updateStake } = this.props;
    return betSlip.map(bet => (
      <BetSlipBetContainer
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
      <BetSlip
        betList={betList}
        betSlip={betSlip}
        clearBetSlip={clearBetSlip}
        placeBet={placeBet}
        totalStake={totalStake}
      />
    )
  }
}

export default BetSlipContainer;
