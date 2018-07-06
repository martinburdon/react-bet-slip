import React from 'react';

export default ({
  betId,
  event,
  odds,
  name,
  removeFromSlip,
  returnVal,
  stake,
  stakeChanged,
  stakeRef
}) => (
  <div className="bet-slip-bet">
    <span className="remove-bet" onClick={() => removeFromSlip(betId)}>&times;</span>
    <p className="name">{name}</p>
    <p className="event">{event}</p>
    <p className="odds">{odds.numerator}/{odds.denominator}</p>
    <div className="stake-area">
      <input
        className="stake"
        name="stake"
        onChange={stakeChanged}
        placeholder="0.00"
        ref={stakeRef}
        type="number"
        pattern="\d+(|\.\d{1,2})"
        value={stake}
      />
    <p className="returns">{returnVal} GBP</p>
    </div>
  </div>
);
