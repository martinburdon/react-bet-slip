import React from 'react';
import MarketListBet from 'components/MarketListBet.js';

const getMarketsList = (markets, addToSlip) => {
  return markets.map(market => <MarketListBet key={market.bet_id} {...market} addToSlip={addToSlip} />);
};

export default ({ addToSlip, markets }) => {
  return (
    <markets-list>
      {markets.length ? getMarketsList(markets, addToSlip) : <p className="markets-loading">Loading Markets</p>}
    </markets-list>
  );
}
