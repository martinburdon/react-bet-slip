import React, { Component } from 'react';
import MarketsList from 'components/MarketsList.js';
import BetSlip from 'components/BetSlip.js';

class App extends Component {
  state = {
    markets: [],
    betSlip: []
  }

  componentDidMount() {
    fetch('https://rxtechnicaltest.herokuapp.com/markets')
    .then(res => res.json())
    .then(markets => this.setState({ markets }));
  }

  addToSlip = (betid, stake) => {
    // Add bet to bet slip
    const newBet = this.state.markets.find(market => market.bet_id === betid);
    this.setState({
      betSlip: [
        ...this.state.betSlip,
        newBet
      ]
    });

    // Disable in markets state
    const updatedMarkets = this.state.markets.map(market => {
      const currentMarket = market;
      currentMarket.active = market.bet_id === betid ? true : currentMarket.active;
      return currentMarket;
    })
    this.setState({ markets: updatedMarkets });
  }

  render() {
    return (
      <main>
        <MarketsList
          addToSlip={this.addToSlip}
          markets={this.state.markets}
        />
        <BetSlip
          bets={this.state.betSlip}
        />
      </main>
    )
  }
}

export default App;
