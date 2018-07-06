import React, { Component } from 'react';
import MarketsList from 'components/MarketsList/MarketsList.js';
import MarketListBetContainer from 'components/MarketListBet/MarketListBetContainer.js';

class MarketsListContainer extends Component {
  getMarketsList(markets, addToSlip) {
    return markets.map(market => <MarketListBetContainer key={market.bet_id} {...market} addToSlip={addToSlip} />);
  }

  render() {
    const { addToSlip, markets } = this.props;
    let children = <p className="markets-loading">Loading Markets</p>;
    if (markets.length) {
      children = this.getMarketsList(markets, addToSlip);
    }
    return (
      <MarketsList>
        {children}
      </MarketsList>
    )
  }
}

export default MarketsListContainer;
