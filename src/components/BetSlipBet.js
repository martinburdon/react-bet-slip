import React, { Component } from 'react';

class BetSlipBet extends Component {
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
    const { numerator, denominator } = odds;
    const returnVal = this.getReturns(odds);
    return (
      <div className="bet-slip-bet">
        <span className="remove-bet" onClick={() => removeFromSlip(bet_id)}>&times;</span>
        <p className="name">{name}</p>
        <p className="event">{event}</p>
        <p className="odds">{numerator}/{denominator}</p>
        <div className="stake-area">
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
        <p className="returns">{returnVal} GBP</p>
        </div>
      </div>
    )
  }
}

export default BetSlipBet;
