import React from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux'


class HistoryChart extends React.Component {
  constructor(props) {
    super(props);
    }

    data() {

      return({
            labels: this.props.history.map((month) => month.date),
            datasets: [
              {
                label: 'History',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.props.history.map((month) => month.close)
              }
            ]
          }

      )
    }

  render() {
    return(
      <div id="line_size">
          <Line data={this.data()} width={300} height={300} />
        </div>
    )
  }

}

function mapStateToProps(state) {
    if (state.history instanceof Array) {
      return {history: []}
    } else {
    return {history: state.history.history.day}
  }
}

const componentCreator = connect(mapStateToProps)

export default componentCreator(HistoryChart)
