export const toggleActiveStatus = (market, betid, status) => {
  const currentMarket = market;
  currentMarket.active = market.bet_id === betid ? status : currentMarket.active;
  return currentMarket;
}
