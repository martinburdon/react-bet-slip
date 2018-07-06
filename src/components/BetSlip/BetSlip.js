import React from 'react';
import PlaceBet from 'components/PlaceBet/PlaceBet.js';

export default ({
  betList,
  betSlip,
  clearBetSlip,
  placeBet,
  totalStake
}) => (
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
