import React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import StockSearch from './stock_search'
import StockCompanies from './stock_companies'




class StockContainer extends React.Component{
  constructor(props){
    super(props)
  }



  render(){

    return (
    <div className='col-md-8 center-block'>

      <StockSearch/>
        <br></br>
        <br></br>
      <StockCompanies/>

    </div>)
  }


}

function mapStateToProps(state) {
  return (
    {tickers: state.tickers,
    data: state.data,
    companies: state.companies,
    history: state.history}
  )
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(StockContainer);
