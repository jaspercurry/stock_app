export default function tickerReducer( state = [], action) {
  switch (action.type) {
    case 'FETCH_TICKERS':
      return action.payload
    default:
      return state
  }
}
