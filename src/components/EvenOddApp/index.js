// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(() => ({count: Math.round(Math.random() * 100, 1)}))
  }

  render() {
    const {count} = this.state
    let text
    if (count % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="title">Count {count}</h1>
          <p className="text">Count is {text}</p>
          <button
            type="button"
            className="increment-btn"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="desc">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
