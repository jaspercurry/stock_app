import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import HistoryChart from "./history_chart"

class StockCompanies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {graph: false}
    this.removeCompany = this.removeCompany.bind(this)
    this.showHistory = this.showHistory.bind(this)
    this.hideGraph = this.hideGraph.bind(this)
  }

  removeCompany(e, symbol) {
    e.preventDefault()
    var index = this.props.companies.indexOf(symbol)
    var new_companies = Object.assign([], this.props.companies)
    new_companies.splice(index, 1)
    this.props.actions.setCompanies(new_companies)
    var formattedTickers = new_companies.join()
    this.props.actions.fetchData(formattedTickers)
  }

  showHistory(e, symbol) {
    e.preventDefault()
    this.props.actions.fetchHistory(symbol)
    this.setState({graph: true})

  }

  hideGraph() {
    this.setState({graph: false})
  }

  render() {
    if (this.state.graph == true) {
      return <div> <HistoryChart/>
      <button onClick={this.hideGraph}>Back to list</button> </div>
    }

    if (this.props.data.length >0) {
      return (
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Company</th>
                <th>Ask</th>
                <th>% Change</th>
                <th>Remove</th>
                <th>History</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((company) => { return (
                <tr>
                  <td>{company.description}</td>
                  <td>${company.ask}</td>
                  <td>{company.change_percentage}%</td>
                  <td> <a onClick={(e) => this.removeCompany(e, company.symbol)} href="">X</a></td>
                  <td> <a onClick={(e) => this.showHistory(e, company.symbol)} href="">Show History</a></td>
                </tr>
              )
              })}
            </tbody>
        </table>
      </div>
      )
    } else {
      return null
    }
  }

}

function mapStateToProps(state) {
    if (state.data.quotes) {
        if ( state.data.quotes.quote instanceof Array ) {
          return {data: state.data.quotes.quote,
                  companies: state.companies}
        } else {
          return {data: [state.data.quotes.quote],
                  companies: state.companies}
        }
    } else {
      return {data: []}
    }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(StockCompanies);
