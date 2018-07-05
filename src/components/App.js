import React, { Component } from 'react';
import MarketsList from 'components/MarketsList.js';
import BetSlip from 'components/BetSlip.js';
import { toggleActiveStatus } from 'helpers.js';

class App extends Component {
  state = {
    markets: [],
    betSlip: []
  }

  componentDidMount() {
    fetch(`${this.props.api}/markets`)
    .then(res => res.json())
    .then(markets => this.setState({ markets }));
  }

  addToSlip = (betid) => {
    const newBet = this.state.markets.find(market => market.bet_id === betid);
    newBet.stake = '';

    const updatedMarkets = this.state.markets.map(market => toggleActiveStatus(market, betid, true));

    this.setState({
      betSlip: [
        ...this.state.betSlip,
        newBet
      ],
      markets: updatedMarkets
    });
  }

  removeFromSlip = (betid) => {
    const updatedBetSlip = this.state.betSlip.filter(bet => bet.bet_id !== betid);
    const updatedMarkets = this.state.markets.map(market => toggleActiveStatus(market, betid, false));

    this.setState({
      betSlip: updatedBetSlip,
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
    // Multiple bet request
    // const body = this.state.betSlip.map(({ bet_id, stake }) => ({ bet_id, stake }));

    // Single bet request
    const body = {
      bet_id: this.state.betSlip[0].bet_id,
      stake: this.state.betSlip[0].stake
    };

    fetch(`${this.props.api}/bets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => console.log(res));
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
          removeFromSlip={this.removeFromSlip}
          updateStake={this.updateStake}
        />
      </main>
    )
  }
}

export default App;
