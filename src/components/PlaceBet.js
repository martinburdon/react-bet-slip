import React, { Fragment } from 'react';

export default ({ placeBet, totalStake }) => (
  <Fragment>
    <div className="total-stake">
      <span className="total">Total bet amount:</span>
      <span className="value">
        {totalStake}
        <span className="currency">GBP</span>
      </span>
    </div>
    <button
      className="place-bet"
      type="submit"
      disabled={!parseFloat(totalStake)}
      onClick={placeBet}>
      Place bet
    </button>
  </Fragment>
)
