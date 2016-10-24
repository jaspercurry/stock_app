export default function companyReducer( state = [], action) {
  switch (action.type) {
    case 'FETCH_COMPANIES':
      return action.payload
    default:
      return state
  }
}
