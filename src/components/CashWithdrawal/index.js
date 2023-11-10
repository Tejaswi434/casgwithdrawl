// Write your code here
import {Component} from 'react'
import eachitem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 0}

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="darkblue">
        <div className="profile-icon">
          <div className="s-logo">
            <h1 className="s-color">S</h1>
          </div>
          <h1>Sarah Williams</h1>
        </div>
        <div className="rupees">
          <p>Your balance</p>
          <div>
            <p>{amount}</p>
            <p>in Rupees</p>
          </div>
        </div>
        <p>Withdraw</p>
        <p>CHOOSE SUM(IN RUPEES)</p>
        <div>
          {denominationsList.map(each => (
            <eachitem individual={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
