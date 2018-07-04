import React, { Component } from 'react';

class BetSlipBet extends Component {
  stakeRef = React.createRef();

  stakeChanged = () => {
    const id = this.props.bet_id;
    const newVal = this.stakeRef.current.value;
    this.props.updateStake(id, newVal);
  }

  getReturns({ numerator, denominator }) {
    const stake = parseFloat(this.props.stake);
    if (stake > 0) {
      return parseFloat((numerator / denominator) * stake + stake).toFixed(2);
    } else {
      return 0;
    }
  }

  render() {
    const { event, name, odds, stake } = this.props;
    const { numerator, denominator } = odds;
    const returnVal = this.getReturns(odds);
    return (
      <div className="bet-slip-bet">
        <p>{name}</p>
        <p>{event}</p>
        <p>{numerator}/{denominator}</p>
        <input
          className="stake"
          name="stake"
          onChange={this.stakeChanged}
          placeholder="0.00"
          ref={this.stakeRef}
          type="number"
          pattern="\d+(|\.\d{1,2})"
          value={stake}
        />
        <p>Returns {returnVal}</p>
      </div>
    )
  }
}

export default BetSlipBet;
