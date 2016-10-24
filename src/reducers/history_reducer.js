export default function historyReducer( state = [], action) {
  switch (action.type) {
    case 'FETCH_HISTORY':
      return action.payload
    default:
      return state
  }
}
