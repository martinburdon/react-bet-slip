import React from 'react';
import Bet from 'components/Bet.js';

const getMarketsList = (markets, addToSlip) => {
  return markets.map(market => <Bet key={market.bet_id} {...market} addToSlip={addToSlip} />);
};

export default ({ addToSlip, markets }) => {
  return (
    <markets-list>
      {markets.length ? getMarketsList(markets, addToSlip) : 'Loading...'}
    </markets-list>
  );
}
