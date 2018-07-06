import React, { Component } from 'react';
import MarketsListContainer from 'components/MarketsList/MarketsListContainer.js';
import BetSlipContainer from 'components/BetSlip/BetSlipContainer.js';
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

  addToSlip = betid => {
    const markets = this.state.markets;
    const newBet = markets.find(market => market.bet_id === betid);
    newBet.stake = '';

    const updatedMarkets = markets.map(market => toggleActiveStatus(market, betid, true));

    this.setState({
      betSlip: [
        ...this.state.betSlip,
        newBet
      ],
      markets: updatedMarkets
    });
  }

  removeFromSlip = betid => {
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
    // Get bets for a multiple bet request - not currently supported
    // const body = this.state.betSlip.map(({ bet_id, stake }) => ({ bet_id, stake }));

    // Single bet request
    const singleBet = this.state.betSlip[0];
    const body = {
      bet_id: singleBet.bet_id,
      stake: singleBet.stake
    };

    fetch(`${this.props.api}/bets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      // TODO: Show a success notification
      // TODO: Handle any errors
      if (res.ok) {
        this.clearBetSlip();
      }
    });
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
        <MarketsListContainer
          addToSlip={this.addToSlip}
          markets={this.state.markets}
        />
        <BetSlipContainer
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
