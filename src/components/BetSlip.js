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
    const betList = betSlip.length ? this.getMarketsList() : <p className="no-bets">No bets placed</p>;
    const totalStake = this.getTotalStake();
    console.log(totalStake);
    console.log(typeof totalStake);
    return (
      <bet-slip>
        <div className="bet-slip-header">
          <button className="clear-betslip" type="submit" disabled={!betSlip.length} onClick={clearBetSlip}>Clear betslip</button>
        </div>
        <div className="bet-list">{betList}</div>
        <div className="bet-slip-footer">
          <div className="total-stake">
            <span className="total">Total bet amount:</span>
            <span className="value">
              {totalStake}
              <span className="currency">GBP</span>
            </span>
          </div>
          <button className="place-bet" type="submit" disabled={!parseFloat(totalStake)} onClick={placeBet}>Place bet</button>
        </div>
      </bet-slip>
    );
  }
}

export default BetSlip;
