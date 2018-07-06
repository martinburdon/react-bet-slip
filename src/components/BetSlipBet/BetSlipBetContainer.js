import React, { Component } from 'react';
import BetSlipBet from 'components/BetSlipBet/BetSlipBet.js';

class BetSlipBetContainer extends Component {
  stakeRef = React.createRef();

  stakeChanged = () => {
    const id = this.props.bet_id;
    const newVal = parseFloat(this.stakeRef.current.value);
    this.props.updateStake(id, newVal);
  }

  getReturns({ numerator, denominator }) {
    const stake = parseFloat(this.props.stake);
    return stake > 0 ? parseFloat((numerator / denominator) * stake + stake).toFixed(2) : 0;
  }

  render() {
    const { bet_id, event, name, odds, removeFromSlip, stake } = this.props;
    const returnVal = this.getReturns(odds);

    return (
      <BetSlipBet
        betId={bet_id}
        event={event}
        odds={odds}
        name={name}
        removeFromSlip={removeFromSlip}
        returnVal={returnVal}
        stake={stake}
        stakeChanged={this.stakeChanged}
        stakeRef={this.stakeRef}
      />
    )
  }
}

export default BetSlipBetContainer;
