import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'




class StockSearch extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.fetchCompaniesAction = this.fetchCompaniesAction.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    var tickers = [...this.props.companies, this.refs.ticker.value.toUpperCase()]
    this.refs.ticker.value = ""
    this.props.actions.setCompanies(tickers)
    this.fetchCompaniesAction(tickers) // had issues with the setCompanies action - had to pass in tickers object to fetchCompaniesAction instead of calling on this.props.companies
  }

  fetchCompaniesAction(tickers) {
    if (tickers.length > 0) {
      var formattedTickers = tickers.join()
      this.props.actions.fetchData(formattedTickers)
    }
    setTimeout(() =>this.fetchCompaniesAction(this.props.companies), 60000); // refreshes stock data every minute 
    setInterval(console.log(this.props.companies), 60000);
  }


  render(){
    return (
    <div className='col-md-4'>
      <form onSubmit={this.handleChange}>
      <input type='text' ref="ticker" placeholder='Ticker Symbol' />
      </form>
  </div>)
  }
}

function mapStateToProps(state) {
  return (
    {companies: state.companies}
  )
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(StockSearch);
