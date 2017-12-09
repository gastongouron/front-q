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
        var a = Object.keys(data).map(function(k) { return data[k] })
        this.setState({data: a })
        console.log(this.state)
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
            { this.state.data.map((item, i) => {
            return<tr>
              <td>{item[i].created_at}</td>
              <td>{item[i].counterparty_name}</td>
              <td>{item[i].operation_type}</td>
              <td>{item[i].amount}</td>
            </tr>
            })
            }
          </tbody>
        </table>
        </div>

    );
  }
}

export default Transactions
