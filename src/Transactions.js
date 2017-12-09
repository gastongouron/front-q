import React, { Component } from "react";
import ReactTable from 'react-table'

class Transactions extends React.Component {

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  loadData() {
    fetch('http://private-5d708-interviewfront.apiary-mock.com/transactions')
      .then(response => response.json())
      .then(data => {
        this.setState({data: data })
        console.log(this.state.data)
    })
      .catch(err => console.error(this.props.url, err.toString()))
  }

  componentDidMount() {
    this.loadData()
  }


  render() {
    return (


      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>DD-MM-YY</th>
              <th>CounterParty Name</th>
              <th>Payment type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
          </tbody>
        </table>
        </div>

    );
  }
}

export default Transactions
