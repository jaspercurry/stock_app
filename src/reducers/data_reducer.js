export default function dataReducer( state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.payload
    default:
      return state
  }
}
