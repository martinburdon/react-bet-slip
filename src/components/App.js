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

  addToSlip = (betid) => {
    // Add bet to bet slip
    const newBet = this.state.markets.find(market => market.bet_id === betid);
    newBet.stake = '';

    // Disable bet in markets state
    const updatedMarkets = this.state.markets.map(market => {
      const currentMarket = market;
      currentMarket.active = market.bet_id === betid ? true : currentMarket.active;
      return currentMarket;
    });

    // Update state
    this.setState({
      betSlip: [
        ...this.state.betSlip,
        newBet
      ],
      markets: updatedMarkets
    });
  }

  updateStake = (betid, stake) => {
    const updateBetSlip = this.state.betSlip.map(bet => {
      const currentBet = bet;
      currentBet.stake = currentBet.bet_id === betid ? stake : currentBet.stake;
      return currentBet;
    });

    this.setState({ betSlip: updateBetSlip });
  }

  placeBet = () => {
    console.log('Place bet');
  }

  clearBetSlip = () => {
    const updatedMarkets = this.state.markets.map(market => {
      const currentMarket = market;
      currentMarket.active = false;
      return currentMarket;
    });
    this.setState({
      betSlip: [],
      markets: updatedMarkets
    });
  }

  render() {
    return (
      <main>
        <MarketsList
          addToSlip={this.addToSlip}
          markets={this.state.markets}
        />
        <BetSlip
          betSlip={this.state.betSlip}
          clearBetSlip={this.clearBetSlip}
          placeBet={this.placeBet}
          updateStake={this.updateStake}
        />
      </main>
    )
  }
}

export default App;
