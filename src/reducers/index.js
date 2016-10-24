import { combineReducers } from 'redux'
import tickerReducer from './ticker_reducer'
import dataReducer from './data_reducer'
import companyReducer from './company_reducer'
import historyReducer from './history_reducer'

const rootReducer = combineReducers({
  tickers: tickerReducer,
  data: dataReducer,
  companies: companyReducer,
  history: historyReducer
})

export default rootReducer
