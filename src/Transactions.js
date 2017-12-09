import React from "react";

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
    var indents = [];
    { this.state.data.map((item, i) => {
      for(let k= 0; k < item.length; k++) {
        indents.push(
          <tr key={k}>
            <td>{this.state.data[0][k].created_at}</td>
            <td>{this.state.data[0][k].counterparty_name}</td>
            <td>{this.state.data[0][k].operation_type}</td>
            <td>{this.state.data[0][k].amount}</td>
          </tr>
        )
      };
    })
    }

    return (

      <div className="table-container">
        <table>
          <thead key="thead">
            <tr>
              <th>DD-MM-YY</th>
              <th>CounterParty Name</th>
              <th>Payment type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody key="tbody">
            {indents}
          </tbody>
        </table>
        </div>

    );
  }
}

export default Transactions
