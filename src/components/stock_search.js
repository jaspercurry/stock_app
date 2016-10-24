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
    this.fetchCompaniesAction(tickers)
  }

  fetchCompaniesAction(tickers) {
    if (tickers.length > 0) {
      var formattedTickers = tickers.join()
      this.props.actions.fetchData(formattedTickers)
    }
    setTimeout(() =>this.fetchCompaniesAction(this.props.companies), 6000);
    setInterval(console.log(this.props.companies), 6000);
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
    {tickers: state.tickers,
    data: state.data,
    companies: state.companies}
  )
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(StockSearch);
